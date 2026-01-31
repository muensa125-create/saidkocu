# 🚀 Said Koçu Web Sitesi - Canlıya Alma Rehberi

## ✅ Build Kontrolü Tamamlandı
Build başarıyla tamamlandı! Herhangi bir hata yok.

---

## 📦 Adım 1: GitHub Hazırlığı

### 1.1 Git Repository Oluşturma

Terminalde proje klasöründe şu komutları sırasıyla çalıştırın:

```bash
# Git repository'yi başlat
git init

# Tüm dosyaları staging area'ya ekle
git add .

# İlk commit'i yap
git commit -m "Initial commit: Said Koçu website"

# GitHub'da yeni bir repository oluşturun (github.com üzerinden)
# Sonra şu komutları çalıştırın (YOUR_USERNAME ve YOUR_REPO_NAME'i değiştirin):
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### 1.2 GitHub'da Repository Oluşturma
1. https://github.com adresine gidin
2. Sağ üstteki "+" butonuna tıklayın → "New repository"
3. Repository adını girin (örn: `said-kocu-website`)
4. **Public** veya **Private** seçin
5. **"Initialize this repository with a README" seçeneğini işaretlemeyin** (zaten dosyalarımız var)
6. "Create repository" butonuna tıklayın
7. Açılan sayfadaki komutları kullanarak projeyi yükleyin

---

## 🌐 Adım 2: Vercel'e Deployment

### 2.1 Vercel Hesabı Oluşturma
1. https://vercel.com adresine gidin
2. "Sign Up" butonuna tıklayın
3. GitHub hesabınızla giriş yapın (önerilir)

### 2.2 Projeyi Vercel'e Bağlama
1. Vercel dashboard'a giriş yaptıktan sonra **"Add New..."** → **"Project"** butonuna tıklayın
2. GitHub repository'nizi seçin (eğer görünmüyorsa "Adjust GitHub App Permissions" ile izinleri kontrol edin)
3. Repository'nizi seçin ve **"Import"** butonuna tıklayın

### 2.3 Proje Ayarları
Vercel otomatik olarak Next.js projesini algılayacak. Şu ayarları kontrol edin:

- **Framework Preset**: Next.js (otomatik algılanır)
- **Root Directory**: `./` (varsayılan)
- **Build Command**: `npm run build` (varsayılan)
- **Output Directory**: `.next` (varsayılan)
- **Install Command**: `npm install` (varsayılan)

**Değişiklik yapmanıza gerek yok!** Vercel Next.js projelerini otomatik algılar.

### 2.4 Environment Variables (Gerekirse)
Şu an için environment variable gerekmiyor. İleride gerekirse:
1. "Environment Variables" sekmesine gidin
2. Gerekli değişkenleri ekleyin

### 2.5 Deploy Etme
1. **"Deploy"** butonuna tıklayın
2. Build işlemi başlayacak (1-2 dakika sürebilir)
3. Build tamamlandığında siteniz canlıda olacak!

---

## 🎉 Adım 3: Deployment Sonrası

### 3.1 Domain Ayarları
- Vercel otomatik olarak bir domain verir: `your-project-name.vercel.app`
- Özel domain eklemek için:
  1. Project Settings → Domains
  2. Domain'inizi ekleyin
  3. DNS ayarlarını yapın (Vercel size talimatları verir)

### 3.2 Otomatik Güncellemeler
- GitHub'a her push yaptığınızda Vercel otomatik olarak yeniden deploy eder
- Production ve Preview deployment'ları otomatik oluşturulur

---

## 📝 Önemli Notlar

1. **Fotoğraflar**: `public` klasöründeki fotoğraflar otomatik olarak deploy edilir
2. **Environment Variables**: Hassas bilgiler için Vercel dashboard'dan ekleyin
3. **Build Ayarları**: Next.js 14 için özel ayar gerekmez
4. **Custom Domain**: Ücretsiz Vercel hesabında da özel domain kullanabilirsiniz

---

## 🔧 Sorun Giderme

### Build Hatası Alırsanız:
1. Vercel dashboard'da "Deployments" sekmesine gidin
2. Başarısız deployment'a tıklayın
3. Log'ları kontrol edin
4. Yerelde `npm run build` çalıştırıp hataları kontrol edin

### Fotoğraflar Görünmüyorsa:
- `public` klasöründeki dosya isimlerini kontrol edin
- Dosya yollarının doğru olduğundan emin olun (`/said-kocu-header.jpg` gibi)

---

## ✅ Checklist

- [ ] Git repository oluşturuldu
- [ ] Kodlar GitHub'a yüklendi
- [ ] Vercel hesabı oluşturuldu
- [ ] Proje Vercel'e bağlandı
- [ ] İlk deployment başarılı
- [ ] Site canlıda çalışıyor
- [ ] (Opsiyonel) Özel domain eklendi

---

**Başarılar! 🎉**
