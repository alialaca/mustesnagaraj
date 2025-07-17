<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
    <div class="aspect-w-16 aspect-h-9">
      <img :src="event.image" :alt="event.title" class="w-full h-48 object-cover object-top">
    </div>
    <div class="p-6">
      <div class="flex justify-between items-start mb-2">
        <h3 class="text-xl font-semibold">{{ event.title }}</h3>
        <span :class="statusClass" class="px-2 py-1 rounded-full text-xs font-medium">
          {{ statusText }}
        </span>
      </div>
      <p class="text-gray-600 mb-2">{{ formatDate(event.date) }}</p>
      <p class="text-gray-600 mb-4">{{ event.location }}</p>
      <p class="text-gray-700 mb-4">{{ event.description }}</p>
      <div class="flex justify-between items-center">
        <NuxtLink :to="`/etkinlik/${event.id}`" class="text-purple-600 hover:text-purple-800 font-medium">
          Detayları Gör →
        </NuxtLink>
        <div class="flex items-center space-x-2">
          <span v-if="event.availableSeats" class="text-sm text-gray-500">
            {{ event.availableSeats }} masa müsait
          </span>
          <a 
            v-if="event.googleFormUrl && event.status === 'upcoming' && event.applicationOpen"
            :href="event.googleFormUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-purple-600 text-white px-3 py-1 rounded text-sm hover:bg-purple-700 transition-colors"
          >
            Kayıt Ol
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  event: {
    type: Object,
    required: true
  }
})

const statusClass = computed(() => {
  switch (props.event.status) {
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
  switch (props.event.status) {
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

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('tr-TR', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}
</script>