# Nuxt3 Static Site Uygulaması Özellikleri

## MüstesnaGaraj web uygulaması

Müstesna Garaj vintage, 2. el ve tasarım satış etkinlikleri organize eden bir firmadır. Yani mekanlarla belirli tarihler için anlaşır ve oralara masalar koyar, o masaları başkalarına kiralar ve
 satışçılar satış yapıp kendilerine gelir elde ederler.

## Özellikler

### Teknik Özellikler
- Static bir uygulama olacak (Nuxt3 ile generate)
- Node.js v22 kullanılacak
- pnpm paket yöneticisi
- Nuxt3 ve Tailwind CSS kullanılacak
- Responsive tasarım (mobil, tablet, desktop)
- SEO optimize edilmiş (meta tagları, sitemap, structured data)
- Performans odaklı (lazy loading, optimized images)

### Sayfa Yapısı
- Ana sayfa (Hero section, yaklaşan etkinlikler)
- Etkinlikler sayfası (tüm etkinlikler, filtreleme)
- Etkinlik detay sayfası
- Hakkımızda sayfası
- İletişim sayfası
- Satışçı başvuru sayfası/formu

### Veri Yapısı
- `events.json` dosyasında etkinlik bilgileri:
  - Etkinlik adı
  - Tarih ve saat
  - Lokasyon/mekan bilgileri
  - Masa sayısı ve fiyatları
  - Etkinlik durumu (yaklaşan, tamamlanan, iptal)
  - Etkinlik görselleri
  - Açıklama
  - Başvuru durumu (açık/kapalı)

### Görsel İhtiyaçları
- Logo ve favicon
- Etkinlik fotoğrafları
- Mekan görselleri
- Placeholder görselleri
- İkonlar

### Fonksiyonellik
- Etkinlik listeleme ve filtreleme
- Etkinlik detay görüntüleme
- İletişim formu
- Satışçı başvuru formu
- Geçmiş etkinlikler arşivi

## Geliştirme Todo Listesi

### ✅ Tamamlanan Görevler
- [x] Git repository oluştur
- [x] İlk commit yap
- [x] Nuxt3 projesi oluştur
- [x] .gitignore dosyası hazırla
- [x] package.json güncelle (Node.js v22, pnpm)

### 🔄 Devam Eden Görevler
- [ ] Tailwind CSS kurulumu
- [ ] Temel proje yapısı oluştur
- [ ] events.json dosyası hazırla
- [ ] Layout ve component'ler oluştur

### 📋 Bekleyen Görevler
#### Sayfa Geliştirme
- [ ] Ana sayfa (Hero section, yaklaşan etkinlikler)
- [ ] Etkinlikler sayfası (listeleme, filtreleme)
- [ ] Etkinlik detay sayfası
- [ ] Hakkımızda sayfası
- [ ] İletişim sayfası
- [ ] Satışçı başvuru sayfası/formu

#### Fonksiyonellik
- [ ] Etkinlik listeleme ve filtreleme sistemi
- [ ] Responsive tasarım implementasyonu
- [ ] SEO optimizasyonu (meta tagları, sitemap)
- [ ] Performans optimizasyonu (lazy loading, image optimization)
- [ ] Form işlemleri (iletişim, başvuru)

#### Test ve Deployment
- [ ] Test yazımı
- [ ] Static site generation test
- [ ] Production build test
- [ ] Deployment hazırlığı
