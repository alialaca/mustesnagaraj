<template>
  <div>
    <!-- Hero Section -->
    <section class="relative h-screen overflow-hidden">
      <div class="absolute inset-0">
        <video 
          autoplay 
          muted 
          loop 
          playsinline 
          class="w-full h-full object-cover"
        >
          <source src="/images/flea-market-aerial.mp4" type="video/mp4">
          <!-- Fallback image -->
          <img src="/images/an-openair-clothing-market.jpg" alt="Vintage Market" class="w-full h-full object-cover">
        </video>
        <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div class="relative z-10 flex items-center justify-center h-full text-white text-center">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 class="text-5xl md:text-7xl font-bold mb-6 text-white">
            Müstesna Garaj
          </h1>
          <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
            Vintage, 2. el ve tasarım ürünlerin buluştuğu eşsiz satış etkinlikleri
          </p>
          <NuxtLink to="/etkinlikler" class="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
            Etkinlikleri Keşfet
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Yaklaşan Etkinlikler -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">Yaklaşan Etkinlikler</h2>
        <div class="space-y-6">
          <div v-for="event in upcomingEvents" :key="event.id" class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div class="md:flex">
              <div class="md:w-1/3">
                <img :src="event.image" :alt="event.title" class="w-full h-48 md:h-full object-cover object-top">
              </div>
              <div class="md:w-2/3 p-6">
                <h3 class="text-xl font-semibold mb-2">{{ event.title }}</h3>
                <div class="flex items-center text-gray-600 mb-2">
                  <svg class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <span class="text-sm">{{ formatEventDateShort(event.date) }}</span>
                </div>
                <div class="flex items-center text-gray-600 mb-4">
                  <svg class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span class="text-sm">{{ event.location.name }}</span>
                </div>
                <p class="text-gray-700 text-sm mb-4 line-clamp-2">{{ event.description }}</p>
                <NuxtLink :to="`/etkinlik/${event.id}`" class="inline-block bg-black text-white px-4 py-2 rounded text-sm hover:bg-gray-800 transition-colors">
                  Detayları Gör
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center mt-12">
          <NuxtLink to="/etkinlikler" class="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
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
const { getUpcomingEvents, formatEventDateShort } = useEvents()
const upcomingEvents = computed(() => getUpcomingEvents().slice(0, 3))

// SEO
useHead({
  title: 'MüstesnaGaraj - Vintage ve Tasarım Etkinlikleri',
  meta: [
    { name: 'description', content: 'Vintage, 2. el ve tasarım ürünlerin buluştuğu eşsiz satış etkinlikleri. Masa kiralayın, ürünlerinizi sergileyin.' }
  ]
})
</script>