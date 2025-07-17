<template>
  <div v-if="event" class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <!-- Ana Görsel -->
    <div class="mb-8">
      <img 
        :src="event.image" 
        :alt="event.title" 
        class="w-full h-64 md:h-96 object-cover object-top rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
        @click="showImageModal = true"
      >
    </div>

    <!-- Image Modal -->
    <div 
      v-if="showImageModal" 
      class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      @click="showImageModal = false"
    >
      <div class="relative w-full h-full flex items-center justify-center">
        <img 
          :src="event.image" 
          :alt="event.title" 
          class="max-w-full max-h-full object-contain rounded-lg"
          @click.stop
        >
        <button 
          @click="showImageModal = false"
          class="absolute top-4 right-4 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition-all"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Başlık ve Durum -->
    <div class="mb-8">
      <div class="flex justify-between items-start mb-4">
        <h1 class="text-3xl md:text-4xl font-bold">{{ event.title }}</h1>
        <span :class="statusClass" class="px-3 py-1 rounded-full text-sm font-medium">
          {{ statusText }}
        </span>
      </div>
      <p class="text-gray-700 text-lg">{{ event.description }}</p>
    </div>

    <!-- Etkinlik Bilgileri -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      <div class="bg-gray-50 p-6 rounded-lg">
        <h3 class="text-xl font-semibold mb-4">Etkinlik Detayları</h3>
        <div class="space-y-3">
          <div class="flex items-center">
            <svg class="h-5 w-5 text-purple-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <div>
              <p class="font-medium">Tarih & Saat</p>
              <p class="text-gray-600">{{ formatEventDate(event.date) }}</p>
            </div>
          </div>
          <div class="flex items-center">
            <svg class="h-5 w-5 text-purple-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div>
              <p class="font-medium">Lokasyon</p>
              <p class="text-gray-600">{{ event.location.name }}</p>
              <p class="text-gray-500 text-sm">{{ event.location.address }}</p>
            </div>
          </div>
          <div v-if="event.tablePrice" class="flex items-center">
            <svg class="h-5 w-5 text-purple-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
            </svg>
            <div>
              <p class="font-medium">Masa Ücreti</p>
              <p class="text-gray-600">{{ event.tablePrice }} TL</p>
            </div>
          </div>
        </div>
      </div>

      <div v-if="event.totalTables && event.availableTables !== undefined" class="bg-gray-50 p-6 rounded-lg">
        <h3 class="text-xl font-semibold mb-4">Masa Durumu</h3>
        <div class="space-y-3">
          <div class="flex justify-between">
            <span>Toplam Masa:</span>
            <span class="font-medium">{{ event.totalTables }}</span>
          </div>
          <div class="flex justify-between">
            <span>Müsait Masa:</span>
            <span class="font-medium text-green-600">{{ event.availableTables }}</span>
          </div>
          <div class="flex justify-between">
            <span>Dolu Masa:</span>
            <span class="font-medium text-red-600">{{ event.totalTables - event.availableTables }}</span>
          </div>
          <div class="mt-4">
            <div class="bg-gray-200 rounded-full h-2">
              <div 
                class="bg-green-600 h-2 rounded-full transition-all duration-300"
                :style="{ width: `${(event.availableTables / event.totalTables) * 100}%` }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Özellikler -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4">Etkinlik Özellikleri</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div v-for="feature in event.features" :key="feature" class="flex items-center">
          <svg class="h-5 w-5 text-green-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          <span>{{ feature }}</span>
        </div>
      </div>
    </div>

    <!-- Kategoriler -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4">Kategoriler</h3>
      <div class="flex flex-wrap gap-2">
        <span v-for="category in event.categories" :key="category" class="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
          {{ category }}
        </span>
      </div>
    </div>

    <!-- Başvuru Butonu -->
    <div class="text-center">
      <a 
        v-if="event.googleFormUrl && event.applicationOpen && (event.availableTables === undefined || event.availableTables > 0)"
        :href="event.googleFormUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors"
      >
        Masa Başvurusu Yap
      </a>
      <div v-else-if="!event.applicationOpen" class="text-gray-500">
        Başvurular kapalı
      </div>
      <div v-else-if="event.availableTables !== undefined && event.availableTables === 0" class="text-red-500">
        Müsait masa bulunmuyor
      </div>
      <div v-else-if="!event.googleFormUrl && event.applicationOpen" class="text-gray-500">
        Başvuru formu hazırlanıyor
      </div>
    </div>

    <!-- İletişim -->
    <div class="mt-8 p-6 bg-gray-50 rounded-lg">
      <h3 class="text-lg font-semibold mb-2">İletişim</h3>
      <p class="text-gray-600">Sorularınız için: {{ event.organizer.contact }}</p>
    </div>
  </div>

  <!-- Etkinlik Bulunamadı -->
  <div v-else class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
    <h1 class="text-2xl font-bold mb-4">Etkinlik Bulunamadı</h1>
    <p class="text-gray-600 mb-8">Aradığınız etkinlik mevcut değil.</p>
    <NuxtLink to="/etkinlikler" class="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
      Etkinliklere Dön
    </NuxtLink>
  </div>
</template>

<script setup>
const route = useRoute()
const { getEventById, formatEventDate } = useEvents()

const event = computed(() => getEventById(route.params.id))
const showImageModal = ref(false)

const statusClass = computed(() => {
  if (!event.value) return ''
  
  switch (event.value.status) {
    case 'upcoming':
      return 'bg-green-100 text-green-800'
    case 'completed':
      return 'bg-gray-100 text-gray-800'
    case 'cancelled':
      return 'bg-red-100 text-red-800'
    default:
      return 'bg-blue-100 text-blue-800'
  }
})

const statusText = computed(() => {
  if (!event.value) return ''
  
  switch (event.value.status) {
    case 'upcoming':
      return 'Yaklaşan'
    case 'completed':
      return 'Tamamlandı'
    case 'cancelled':
      return 'İptal'
    default:
      return 'Aktif'
  }
})


// SEO
useHead(() => ({
  title: event.value ? `${event.value.title} - MüstesnaGaraj` : 'Etkinlik Bulunamadı - MüstesnaGaraj',
  meta: [
    { 
      name: 'description', 
      content: event.value ? event.value.description : 'Aradığınız etkinlik mevcut değil.'
    }
  ]
}))
</script>