/**
 * Akvaryum - Kick OAuth token proxy (Cloudflare Worker)
 *
 * Secret'lar Worker'da tutulur, koda yazılmaz:
 *   wrangler secret put KICK_CLIENT_SECRET
 * Düz değişkenler (wrangler.toml [vars] veya panel):
 *   KICK_CLIENT_ID      = 01M704E9HN0NWT18M0PSBN6QWJ
 *   KICK_REDIRECT_URI   = https://etpdayi.github.io/akvaryum-2/
 * (İsteğe bağlı: ALLOWED_ORIGINS / ALLOWED_REDIRECTS virgülle birden fazla adres için.
 *  Verilmezse origin, KICK_REDIRECT_URI'den otomatik türetilir.)
 */
export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';
    const list = v => (v || '').split(',').map(s => s.trim()).filter(Boolean);
    const allowedRedirects = [...list(env.ALLOWED_REDIRECTS), ...list(env.KICK_REDIRECT_URI)];
    const allowedOrigins = [...list(env.ALLOWED_ORIGINS)];
    for (const r of allowedRedirects) { try { allowedOrigins.push(new URL(r).origin); } catch {} }
    const originOk = allowedOrigins.includes(origin);

    const cors = {
      'Access-Control-Allow-Origin': originOk ? origin : 'null',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Vary': 'Origin'
    };
    const json = (obj, status = 200) =>
      new Response(JSON.stringify(obj), { status, headers: { ...cors, 'Content-Type': 'application/json' } });

    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });
    if (request.method !== 'POST') return json({ error: 'Method not allowed' }, 405);
    if (!originOk) return json({ error: 'Origin izinli değil' }, 403);

    let body;
    try { body = await request.json(); } catch { return json({ error: 'Geçersiz istek' }, 400); }

    const { code, code_verifier, redirect_uri } = body || {};
    if (!code || !code_verifier || !redirect_uri) return json({ error: 'Eksik parametre' }, 400);
    if (!allowedRedirects.includes(redirect_uri)) return json({ error: 'redirect_uri izinli değil' }, 400);

    const tokenRes = await fetch('https://id.kick.com/oauth/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Accept': 'application/json' },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        client_id: env.KICK_CLIENT_ID,
        client_secret: env.KICK_CLIENT_SECRET,
        redirect_uri,
        code,
        code_verifier
      }).toString()
    });
    if (!tokenRes.ok) return json({ error: 'Kick token isteği reddetti' }, 401);

    const { access_token } = await tokenRes.json();
    if (!access_token) return json({ error: 'Token alınamadı' }, 401);

    const userRes = await fetch('https://api.kick.com/public/v1/users', {
      headers: { 'Authorization': `Bearer ${access_token}`, 'Accept': 'application/json' }
    });
    if (!userRes.ok) return json({ error: 'Kullanıcı bilgisi alınamadı' }, 502);

    const userData = await userRes.json();
    const profile = (userData.data && userData.data[0]) || userData.data || userData;
    const username = profile.name || profile.username;
    if (!username) return json({ error: 'Kullanıcı adı bulunamadı' }, 502);

    // Access token tarayıcıya GİTMEZ; sadece profil bilgisi döner.
    return json({
      username,
      avatar: profile.profile_picture || profile.avatar || null,
      userId: profile.user_id || profile.id || null
    });
  }
};
