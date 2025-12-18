# MüstesnaGaraj

[![Live Site](https://img.shields.io/badge/Live%20Site-mustesnagaraj.com-purple)](https://mustesnagaraj.com)
[![Nuxt 3](https://img.shields.io/badge/Nuxt-3-green)](https://nuxt.com/)
[![Vue 3](https://img.shields.io/badge/Vue-3-green)](https://vuejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3-blue)](https://tailwindcss.com/)

**MüstesnaGaraj**, vintage, ikinci el ve tasarım ürünleri satış etkinlikleri organize eden bir şirketin kurumsal web sitesidir. Mekanlarla anlaşarak özel tarihlerde masalar kiralayan ve satıcılara gelir fırsatı sunan bir platform.

## 🚀 Canlı Site

Web sitesi [mustesnagaraj.com](https://mustesnagaraj.com) adresinde yayında.

## ✨ Özellikler

- **Responsive Tasarım**: Mobil ve masaüstü cihazlar için optimize edilmiş
- **Etkinlik Yönetimi**: Yaklaşan, tamamlanmış ve iptal edilen etkinliklerin görüntülenmesi
- **SEO Dostu URL'ler**: Etkinlik sayfaları için okunabilir slug-based URL yapısı
- **Dinamik İçerik**: JSON tabanlı etkinlik verisi yönetimi
- **Satıcı Başvuruları**: Etkinliklere katılım için başvuru formu
- **İletişim Formu**: EmailJS ile backend gerektirmeyen e-posta gönderimi
- **Analytics**: Umami ile web sitesi ve etkinlik analitikleri
- **Statik Site**: Hızlı yüklenen, SEO dostu yapı
- **Türkçe Arayüz**: Tam Türkçe dil desteği

## 🛠️ Teknolojiler

- **[Nuxt 3](https://nuxt.com/)** - Vue.js framework'ü ile SSG
- **[Vue 3](https://vuejs.org/)** - Composition API ile modern frontend
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[TypeScript](https://www.typescriptlang.org/)** - Tip güvenliği
- **[Umami](https://umami.is/)** - Privacy-friendly web analytics
- **[PNPM](https://pnpm.io/)** - Performanslı paket yöneticisi

## 📋 Gereksinimler

- Node.js v22.0.0+
- PNPM v9.0.0+

## 🚀 Kurulum

```bash
# Bağımlılıkları yükle
pnpm install

# Geliştirme sunucusunu başlat (http://localhost:3000)
pnpm dev

# Üretim için derle
pnpm build

# Statik site oluştur
pnpm generate

# Üretim build'ini önizle
pnpm preview
```

## 📁 Proje Yapısı

```
├── components/          # Vue bileşenleri
│   ├── EventCard.vue   # Etkinlik kartı bileşeni
│   └── ContactForm.vue # İletişim formu (EmailJS entegrasyonu)
├── composables/        # Vue composable'ları
│   └── useEvents.js    # Etkinlik veri yönetimi
├── data/              # JSON veri dosyaları
│   └── events.json    # Etkinlik verisi
├── layouts/           # Layout bileşenleri
│   └── default.vue    # Ana layout ve navigasyon
├── pages/             # Sayfa bileşenleri (file-based routing)
│   ├── index.vue      # Ana sayfa
│   ├── etkinlikler.vue # Etkinlik listesi
│   ├── etkinlik/[slug].vue # Etkinlik detay sayfaları (SEO dostu URL'ler)
│   ├── hakkimizda.vue # Hakkımızda sayfası
│   ├── iletisim.vue   # İletişim sayfası
│   └── satisci-basvuru.vue # Satıcı başvuru formu
├── public/            # Statik dosyalar
│   └── images/        # Etkinlik ve UI görselleri
└── assets/            # İşlenmiş varlıklar
    └── css/           # Stil dosyaları
```

## 🎯 Temel Özellikler

### Etkinlik Yönetimi
- **Otomatik Durum Hesaplama**: Tarih aralıklarına göre otomatik olarak yaklaşan, devam eden veya tamamlanmış olarak belirlenir
- **Çoklu Gün Desteği**: Tek veya birden fazla gün süren etkinlikler için esnek tarih yapısı
- **Akıllı Tarih Gösterimi**: "27-28 Aralık 2025" gibi tarih aralıkları otomatik oluşturulur
- **SEO Dostu URL'ler**: `/etkinlik/slug-adi` formatında temiz URL yapısı
- **Dinamik Filtreleme**: Tarih ve durum tabanlı filtreleme
- **Detaylı Görüntüleme**: Her etkinlik için ayrıntılı bilgi sayfası
- **Başvuru Sistemi**: Satıcı başvurularının yönetimi

### Responsive Tasarım
- **Mobil Öncelikli**: Responsive tasarım yaklaşımı
- **Adaptif Layout**: Farklı ekran boyutları için optimize edilmiş
- **Performans**: Hızlı yüklenen optimizasyonlar

### İçerik Yönetimi
- **JSON Tabanlı**: Kolay güncellenebilir etkinlik verisi
- **Composable Yapı**: Yeniden kullanılabilir veri fonksiyonları
- **Türkçe Yerelleştirme**: Tarih formatları ve arayüz dili

### Analytics & Tracking
- **Web Analytics**: Umami ile sayfa görüntüleme ve kullanıcı davranışı analizi
- **Route Tracking**: Otomatik sayfa geçiş izleme
- **Event Tracking**: Etkinlik başvuru butonları ve iletişim formu için özel event izleme
- **Privacy-Friendly**: GDPR uyumlu, çerez gerektirmeyen analitik

### İletişim ve Form Yönetimi
- **EmailJS Entegrasyonu**: Backend gerektirmeyen e-posta gönderimi
- **ContactForm Bileşeni**: Yeniden kullanılabilir iletişim formu
- **Form Validasyonu**: Client-side form doğrulama ve kullanıcı geri bildirimi
- **Analytics Entegrasyonu**: Form gönderimlerinin Umami ile izlenmesi

## 🔧 Geliştirme

### Etkinlik Ekleme
Yeni etkinlik eklemek için `data/events.json` dosyasını düzenleyin:

```json
{
  "id": 1,
  "title": "Etkinlik Adı",
  "slug": "etkinlik-adi",
  "description": "Etkinlik açıklaması",
  "dates": [
    {"startDate": "2025-12-27T14:00:00", "endDate": "2025-12-27T21:00:00"},
    {"startDate": "2025-12-28T14:00:00", "endDate": "2025-12-28T21:00:00"}
  ],
  "location": {
    "name": "Mekan Adı",
    "address": "Adres",
    "coordinates": {
      "lat": 38.4337,
      "lng": 27.1444
    }
  },
  "image": "/images/etkinlik.jpg",
  "applicationOpen": true,
  "totalTables": 50,
  "availableTables": 30,
  "tablePrice": 500,
  "googleFormUrl": "https://forms.gle/example",
  "features": [
    "Özellik 1",
    "Özellik 2"
  ],
  "categories": ["kategori1", "kategori2"],
  "organizer": {
    "name": "MüstesnaGaraj",
    "contact": "info@mustesnagaraj.com"
  }
}
```

**Önemli Notlar**:
- `slug` alanı SEO dostu URL'ler için kullanılır. Türkçe karakterler otomatik olarak İngilizce karşılıklarıyla değiştirilir.
- `dates` dizisi birden fazla gün için ayrı objeler içerir. Tek günlük etkinlikler için tek obje yeterlidir.
- Etkinlik durumu (`upcoming`, `progress`, `completed`) tarih aralıklarına göre otomatik hesaplanır - manuel belirtmeye gerek yoktur.

### Stil Değişiklikleri
Tailwind CSS sınıflarını kullanarak stilleri özelleştirin. Ana renk paleti:
- **Birincil**: Purple (mor tonları)
- **İkincil**: Gray (gri tonları)
- **Vurgu**: Hover efektleri ve geçişler

## 🚢 Deployment

Proje Docker ile containerize edilmiştir ve CapRover ile deploy edilir:

```bash
# Otomatik deployment
pnpm run deploy
```

Bu komut şunları yapar:
1. Statik site oluşturur (`nuxt generate`)
2. Docker image'ı hazırlar
3. CapRover'a deploy eder

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje özel mülkiyettir ve MüstesnaGaraj şirketine aittir.

## 📞 İletişim

- **Web Site**: [mustesnagaraj.com](https://mustesnagaraj.com)
- **İletişim**: Web sitesindeki iletişim formu üzerinden

---

<p align="center">
  <strong>MüstesnaGaraj</strong> - Vintage, İkinci El ve Tasarım Ürünleri Etkinlikleri
</p>
