/**
 * Akvaryum - Kick OAuth 2.0 Kimlik Doğrulama (PKCE + Authorization Code)
 *
 * GÜVENLİK: client_secret artık bu dosyada YOK. Token takası (code -> kullanıcı bilgisi)
 * secret'ı sadece kendi ortam değişkeninde tutan küçük bir proxy'de (kick-oauth-worker.js,
 * Cloudflare Worker) yapılır. Tarayıcıya yalnızca kullanıcı adı / avatar / id döner,
 * access token tarayıcıya hiç gelmez.
 */

class KickAuthManager {
    constructor() {
        this.clientId = '01M704E9HN0NWT18M0PSBN6QWJ';
        
        // Worker'ı yayınladıktan sonra çıkan adresi buraya yaz (README'de adımlar var).
        this.authProxyUrl = 'https://akvaryum-kick-auth.KULLANICI-ADIN.workers.dev';

        this.storageKey = 'akvaryum_kick_session';
        this.currentUser = null;
        this.onAuthChangeCallback = null;

        this.init();
    }

    init() {
        this.loadStoredUser();
        this.handleOAuthCallback();
    }

    // Yönlendirme adresi, Kick panelindeki "URL Yönlendirme" ile BİREBİR aynı olmalı.
    // Sayfanın o anki adresinden üretilir (index.html atılır, sonda / kalır).
    getEffectiveRedirectUri() {
        let path = window.location.pathname.replace(/index\.html$/, '');
        if (!path.endsWith('/')) path += '/';
        return window.location.origin + path;
    }

    loadStoredUser() {
        try {
            const raw = localStorage.getItem(this.storageKey);
            if (!raw) return;
            const user = JSON.parse(raw);
            // Eski misafir / elle girilmiş oturumlar geçersiz: Kick doğrulaması şart.
            if (!user || user.manual || user.verified !== true || !user.username) {
                localStorage.removeItem(this.storageKey);
                localStorage.removeItem('akvaryum_kick_user');
                return;
            }
            this.currentUser = user;
        } catch (e) {
            this.currentUser = null;
        }
    }

    saveUser(user) {
        this.currentUser = user;
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(user));
            localStorage.setItem('akvaryum_kick_user', user.username);
        } catch (e) {}
        if (this.onAuthChangeCallback) this.onAuthChangeCallback(this.currentUser);
    }

    logout() {
        this.currentUser = null;
        try {
            localStorage.removeItem(this.storageKey);
            localStorage.removeItem('akvaryum_kick_user');
        } catch (e) {}
        if (this.onAuthChangeCallback) this.onAuthChangeCallback(null);
    }

    isLoggedIn() { return !!this.currentUser; }
    getUser() { return this.currentUser; }

    generateRandomString(length = 64) {
        const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~';
        const values = new Uint8Array(length);
        window.crypto.getRandomValues(values);
        let result = '';
        for (let i = 0; i < length; i++) result += charset[values[i] % charset.length];
        return result;
    }

    async generateCodeChallenge(codeVerifier) {
        const data = new TextEncoder().encode(codeVerifier);
        const digest = await window.crypto.subtle.digest('SHA-256', data);
        let str = '';
        const bytes = new Uint8Array(digest);
        for (let i = 0; i < bytes.byteLength; i++) str += String.fromCharCode(bytes[i]);
        return btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    }

    async startKickLogin() {
        try {
            const state = this.generateRandomString(32);
            const codeVerifier = this.generateRandomString(64);
            const codeChallenge = await this.generateCodeChallenge(codeVerifier);
            const redirectUri = this.getEffectiveRedirectUri();

            sessionStorage.setItem('kick_oauth_state', state);
            sessionStorage.setItem('kick_oauth_verifier', codeVerifier);
            sessionStorage.setItem('kick_oauth_redirect_uri', redirectUri);

            const scope = 'user:read'; // Kick panelinde işaretli scope'larla uyumlu olmalı
            const authUrl = `https://id.kick.com/oauth/authorize?response_type=code&client_id=${encodeURIComponent(this.clientId)}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scope)}&code_challenge=${encodeURIComponent(codeChallenge)}&code_challenge_method=S256&state=${encodeURIComponent(state)}`;
            window.location.href = authUrl;
        } catch (e) {
            console.error('Kick OAuth başlatma hatası:', e);
            alert('Kick girişi başlatılamadı: ' + e.message);
        }
    }

    async handleOAuthCallback() {
        const params = new URLSearchParams(window.location.search);
        const code = params.get('code');
        const state = params.get('state');
        const error = params.get('error');

        if (error) {
            console.warn('Kick OAuth hatası:', error, params.get('error_description'));
            this.cleanUrlParams();
            return;
        }
        if (!code) return;

        const savedState = sessionStorage.getItem('kick_oauth_state');
        const codeVerifier = sessionStorage.getItem('kick_oauth_verifier');
        const redirectUri = sessionStorage.getItem('kick_oauth_redirect_uri') || this.getEffectiveRedirectUri();

        // State zorunlu: yoksa veya uyuşmuyorsa reddet (CSRF koruması)
        if (!savedState || state !== savedState || !codeVerifier) {
            console.error('State/verifier doğrulaması başarısız.');
            this.clearSessionTemp();
            this.cleanUrlParams();
            return;
        }

        try {
            const res = await fetch(this.authProxyUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ code, code_verifier: codeVerifier, redirect_uri: redirectUri })
            });
            const data = await res.json().catch(() => ({}));
            if (!res.ok || !data.username) {
                throw new Error(data.error || `Giriş sunucusu hata döndü (${res.status})`);
            }

            this.saveUser({
                username: data.username,
                avatar: data.avatar || null,
                userId: data.userId || null,
                verified: true,
                authenticatedAt: Date.now()
            });
        } catch (e) {
            console.error('Kick giriş hatası:', e);
            alert('Kick girişi tamamlanamadı. Lütfen tekrar dene.\n' + e.message);
        } finally {
            this.clearSessionTemp();
            this.cleanUrlParams();
        }
    }

    clearSessionTemp() {
        sessionStorage.removeItem('kick_oauth_state');
        sessionStorage.removeItem('kick_oauth_verifier');
        sessionStorage.removeItem('kick_oauth_redirect_uri');
    }

    cleanUrlParams() {
        const url = new URL(window.location.href);
        ['code', 'state', 'error', 'error_description'].forEach(k => url.searchParams.delete(k));
        window.history.replaceState({}, document.title, url.toString());
    }
}

window.kickAuth = new KickAuthManager();
