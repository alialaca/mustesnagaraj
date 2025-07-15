<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-6">
          MüstesnaGaraj
        </h1>
        <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Vintage, 2. el ve tasarım ürünlerin buluştuğu eşsiz satış etkinlikleri
        </p>
        <NuxtLink to="/etkinlikler" class="bg-white text-purple-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
          Etkinlikleri Keşfet
        </NuxtLink>
      </div>
    </section>

    <!-- Yaklaşan Etkinlikler -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">Yaklaşan Etkinlikler</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="event in upcomingEvents" :key="event.id" class="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div class="aspect-w-16 aspect-h-9 mb-4">
              <img :src="event.image" :alt="event.title" class="w-full h-48 object-cover rounded-lg">
            </div>
            <h3 class="text-xl font-semibold mb-2">{{ event.title }}</h3>
            <p class="text-gray-600 mb-2">{{ event.date }}</p>
            <p class="text-gray-600 mb-4">{{ event.location }}</p>
            <NuxtLink :to="`/etkinlik/${event.id}`" class="text-purple-600 hover:text-purple-800 font-medium">
              Detayları Gör →
            </NuxtLink>
          </div>
        </div>
        <div class="text-center mt-12">
          <NuxtLink to="/etkinlikler" class="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors">
            Tüm Etkinlikler
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Nasıl Çalışır -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">Nasıl Çalışır?</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span class="text-purple-600 text-2xl font-bold">1</span>
            </div>
            <h3 class="text-xl font-semibold mb-2">Etkinlik Seç</h3>
            <p class="text-gray-600">Yaklaşan etkinliklerimizi incele ve katılmak istediğini seç</p>
          </div>
          <div class="text-center">
            <div class="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span class="text-purple-600 text-2xl font-bold">2</span>
            </div>
            <h3 class="text-xl font-semibold mb-2">Masa Kirala</h3>
            <p class="text-gray-600">Uygun masa seçeneklerini görüntüle ve rezervasyon yap</p>
          </div>
          <div class="text-center">
            <div class="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span class="text-purple-600 text-2xl font-bold">3</span>
            </div>
            <h3 class="text-xl font-semibold mb-2">Satış Yap</h3>
            <p class="text-gray-600">Etkinlik gününde masanda ürünlerini sergile ve satış yap</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Geçici veri - sonradan events.json'dan gelecek
const upcomingEvents = ref([
  {
    id: 1,
    title: "Vintage Pazarı",
    date: "15 Ağustos 2025",
    location: "Kadıköy Moda",
    image: "/images/placeholder-event.jpg"
  },
  {
    id: 2,
    title: "Tasarım Festivali",
    date: "22 Ağustos 2025",
    location: "Beyoğlu Galata",
    image: "/images/placeholder-event.jpg"
  },
  {
    id: 3,
    title: "El Sanatları Fuarı",
    date: "29 Ağustos 2025",
    location: "Beşiktaş Barbaros",
    image: "/images/placeholder-event.jpg"
  }
])

// SEO
useHead({
  title: 'MüstesnaGaraj - Vintage ve Tasarım Etkinlikleri',
  meta: [
    { name: 'description', content: 'Vintage, 2. el ve tasarım ürünlerin buluştuğu eşsiz satış etkinlikleri. Masa kiralayın, ürünlerinizi sergileyin.' }
  ]
})
</script>