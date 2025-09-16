<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <h1 class="text-3xl font-bold mb-8">Etkinlikler</h1>
    
    <!-- Filtreler -->
    <div class="mb-8 flex flex-wrap gap-4">
      <select v-model="statusFilter" class="px-4 py-2 border rounded-lg">
        <option value="all">Tüm Etkinlikler</option>
        <option value="upcoming">Yaklaşan</option>
        <option value="completed">Tamamlanan</option>
      </select>
    </div>

    <!-- Etkinlik Listesi -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="event in filteredEvents" :key="event.id" class="bg-white rounded-lg shadow-md overflow-hidden">
        <img :src="event.image" :alt="event.title" class="w-full h-48 object-cover object-top">
        <div class="p-6">
          <div class="flex justify-between items-start mb-2">
            <h3 class="text-xl font-semibold">{{ event.title }}</h3>
            <span :class="statusClass(event.status)" class="px-2 py-1 rounded-full text-xs font-medium">
              {{ statusText(event.status) }}
            </span>
          </div>
          <p class="text-gray-600 mb-2">{{ formatEventDateShort(event.date) }}</p>
          <p class="text-gray-600 mb-4">{{ event.location.name }}</p>
          <p class="text-gray-700 mb-4">{{ event.description }}</p>
          <NuxtLink :to="`/etkinlik/${event.slug}`" class="text-purple-600 hover:text-purple-800 font-medium">
            Detayları Gör →
          </NuxtLink>
        </div>
      </div>
    </div>

    <div v-if="filteredEvents.length === 0" class="text-center py-12">
      <p class="text-gray-500">Seçilen filtreye uygun etkinlik bulunamadı.</p>
    </div>
  </div>
</template>

<script setup>
const statusFilter = ref('all')
const { events, getEventsByStatus, formatEventDateShort } = useEvents()

const filteredEvents = computed(() => {
  return getEventsByStatus(statusFilter.value)
})

const statusClass = (status) => {
  switch (status) {
    case 'upcoming':
      return 'bg-green-100 text-green-800'
    case 'completed':
      return 'bg-gray-100 text-gray-800'
    default:
      return 'bg-blue-100 text-blue-800'
  }
}

const statusText = (status) => {
  switch (status) {
    case 'upcoming':
      return 'Yaklaşan'
    case 'progress':
      return 'Devam Ediyor'
    case 'completed':
      return 'Tamamlandı'
    default:
      return 'Aktif'
  }
}

// SEO
useHead({
  title: 'Etkinlikler - MüstesnaGaraj',
  meta: [
    { name: 'description', content: 'Vintage, 2. el ve tasarım etkinliklerimizi keşfedin. Yaklaşan ve geçmiş etkinlikleri görüntüleyin.' }
  ]
})
</script>