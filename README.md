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
- **Dinamik İçerik**: JSON tabanlı etkinlik verisi yönetimi
- **Satıcı Başvuruları**: Etkinliklere katılım için başvuru formu
- **Statik Site**: Hızlı yüklenen, SEO dostu yapı
- **Türkçe Arayüz**: Tam Türkçe dil desteği

## 🛠️ Teknolojiler

- **[Nuxt 3](https://nuxt.com/)** - Vue.js framework'ü ile SSG
- **[Vue 3](https://vuejs.org/)** - Composition API ile modern frontend
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[TypeScript](https://www.typescriptlang.org/)** - Tip güvenliği
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
│   └── EventCard.vue   # Etkinlik kartı bileşeni
├── composables/        # Vue composable'ları
│   └── useEvents.js    # Etkinlik veri yönetimi
├── data/              # JSON veri dosyaları
│   └── events.json    # Etkinlik verisi
├── layouts/           # Layout bileşenleri
│   └── default.vue    # Ana layout ve navigasyon
├── pages/             # Sayfa bileşenleri (file-based routing)
│   ├── index.vue      # Ana sayfa
│   ├── etkinlikler.vue # Etkinlik listesi
│   ├── etkinlik/[id].vue # Etkinlik detay sayfaları
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
- **Etkinlik Durumları**: Yaklaşan, tamamlanmış, iptal edilen
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

## 🔧 Geliştirme

### Etkinlik Ekleme
Yeni etkinlik eklemek için `data/events.json` dosyasını düzenleyin:

```json
{
  "id": "unique-id",
  "title": "Etkinlik Adı",
  "description": "Etkinlik açıklaması",
  "date": "2024-MM-DD",
  "status": "upcoming",
  "location": {
    "name": "Mekan Adı",
    "address": "Adres",
    "coordinates": [lat, lng]
  },
  "tables": {
    "total": 50,
    "price": 500,
    "available": true
  }
}
```

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
