# 🐟 Akvaryum (8-Bit Pixel Art & Canlı Yayın MMO)

> 8-Bit retro arcade piksel grafikleri, derin sanal bebek (Tamagotchi) hayatta kalma mekanikleri, **Resmi Kick OAuth 2.0 Giriş Kapısı**, **AFK Gold Farming (Pasif Gelir)** ve **Topluluk Akvaryumlarını Ziyaret** sistemiyle donatılmış kolektif dijital akvaryum.

---

## 🔐 Kick OAuth 2.0 Girişi (Misafir girişi yok)

Oyuna sadece resmi Kick hesabıyla girilir; kullanıcı adı yazarak giriş kaldırıldı.

- **Client ID:** `01M704E9HN0NWT18M0PSBN6QWJ`
- **Redirect URI:** `https://etpdayi.github.io/akvaryum-2/`
- **Scope:** `user:read`
- **Client secret koda yazılmaz.** Token takası `kick-oauth-worker.js` (Cloudflare Worker) üzerinde yapılır, secret sadece Worker'ın gizli değişkeninde durur. Tarayıcıya yalnızca kullanıcı adı/avatar/id döner.

### Worker kurulumu (GitHub Pages'te kalırken secret'ı güvene alma)

1. **Önce Kick Developers panelinden eski secret'ı yenile (rotate).** Eski secret dosyada ve git geçmişinde göründüğü için artık güvenli değil; koddan silmek tek başına yetmez.
2. Cloudflare hesabında (ücretsiz plan yeterli) yeni bir Worker oluştur, `kick-oauth-worker.js` içeriğini yapıştır.
3. Worker ayarlarında şu değişkenleri ekle:
   - `KICK_CLIENT_SECRET` → yeni secret (**Secret** olarak ekle)
   - `KICK_CLIENT_ID` → `01M704E9HN0NWT18M0PSBN6QWJ`
   - `KICK_REDIRECT_URI` → `https://etpdayi.github.io/akvaryum-2/`
4. Worker'ın adresini `kick-auth.js` içindeki `authProxyUrl` alanına yaz.
5. Dosyaları GitHub'a pushla. Eski commit'lerde secret kaldığı için secret'ı yenilemen şart.

## 🎨 8-Bit Piksel Sanat Tasarımı ve Oyun Döngüsü

1. **8-Bit Piksel Çizim Atölyesi:**
   - 54x36 ızgara üzerinde 1x1, 2x2 ve 3x3 piksel fırçaları, retro 16 renk paleti, kova dolgusu ve canlı önizleme ile kendi piksel balığını çiz.
2. **Kişisel 8-Bit Akvaryum & Bölgesel Yosunlaşma:**
   - Dithered piksel su katmanları, 8-bit kaya kemeri ve salınan deniz yosunları.
   - Sürekli piksel kirlenme yerine, belirli aralıklarla (yaklaşık her 45 saniyede bir) camın üzerinde organik dairesel piksel yosun lekeleri belirir.
   - Oyuncu sünger imleciyle lekenin üstünü siler ve **+2 Gold** temizlik ödülü kazanır.
3. **10 Dakikada Bir Ana Yem:**
   - 10 yem = 100 dakika yayın izleme emeği ile yavru piksel balık olgun bir yetişkine dönüşür.
4. **🪙 AFK Gold Farming (Pasif Gelir):**
   - Balık sağlıklı yaşadığı her dakika kullanıcıya pasif olarak **+10 Gold** kazandırır.
   - Hastalanırsa (oksijen düşerse veya lekeler silinmezse) altın üretimi durur!
5. **🛍️ 8-Bit Kozmetik Dükkanı (4 kategori):**
   - **Yüzme İzi (9):** Kick Neon, Yıldız Tozu, Buz Kristali, Kalp, Altın Toz, Ateş, Gökkuşağı, Boşluk Mor… İzler balığın kuyruğundan, mesafeye bağlı eşit aralıkla çıkar, ızgaraya oturur ve üç kademede küçülerek söner.
   - **Dekor (9):** Çapa, Neon Mercan, Kabarcık Makinesi, Hazine Sandığı, Fener, Kristaller, Denizanası, Piksel Kale.
   - **Yoldaş (4):** Deniz Yıldızı, Yengeç, Deniz Atı, Kaplumbağa.
   - **Tema (6):** Retro Okyanus, Lagün, Gün Batımı, Siberpunk, Şeker, Derin Uçurum.
6. **👥 Topluluk Akvaryumlarını Ziyaret Et:**
   - Diğer izleyicilerin piksel akvaryumları gezilebilir, balıkları sevilerek karşılıklı **+5 Gold** kazanılabilir.
7. **🌊 Ortak Okyanus (8-Bit MMO):**
   - 10. yeme ulaşan balık okyanusa salınır; tüm izleyicilerin piksel balıkları devasa ortak okyanusta hep birlikte yüzer.

---

## 🚀 Dağıtım (GitHub Pages Kurulumu)

Projeyi `https://etpdayi.github.io/akvaryum-2/` adresinde canlıya almak için:

1. Proje klasöründeki dosyaları GitHub'da `akvaryum` isimli bir depoya (repository) yükleyin:
   ```bash
   git init
   git add .
   git commit -m "Akvaryum 8-Bit Pixel Art & Kick OAuth Yayında"
   git branch -M main
   git remote add origin https://github.com/etpdayi/akvaryum.git
   git push -u origin main
   ```
2. Depo ayarlarından (**Settings** ➔ **Pages**) `main` dalını seçip kaydedin.
3. Birkaç saniye içinde `https://etpdayi.github.io/akvaryum-2/` adresinde oyun ve Kick OAuth girişiniz tam uyumlu olarak canlıya geçecektir!
