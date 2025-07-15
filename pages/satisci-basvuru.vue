<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="mb-8">
      <h1 class="text-3xl font-bold mb-4">Satışçı Başvurusu</h1>
      <p class="text-gray-600">
        Etkinliklerimizde satış yapmak için aşağıdaki formu doldurun. Başvurunuz değerlendirildikten sonra size geri dönüş yapılacaktır.
      </p>
    </div>

    <!-- Etkinlik Seçimi -->
    <div v-if="selectedEvent" class="mb-8 p-6 bg-blue-50 rounded-lg">
      <h3 class="text-lg font-semibold mb-2">Seçili Etkinlik</h3>
      <div class="flex items-center">
        <img :src="selectedEvent.image" :alt="selectedEvent.title" class="w-16 h-16 object-cover rounded-lg mr-4">
        <div>
          <h4 class="font-medium">{{ selectedEvent.title }}</h4>
          <p class="text-gray-600">{{ formatEventDate(selectedEvent.date) }}</p>
          <p class="text-gray-600">{{ selectedEvent.location.name }}</p>
          <p v-if="selectedEvent.tablePrice" class="text-sm text-gray-500">Masa ücreti: {{ selectedEvent.tablePrice }} TL</p>
        </div>
      </div>
    </div>

    <!-- Başvuru Formu -->
    <form @submit.prevent="submitApplication" class="space-y-6">
      <!-- Etkinlik Seçimi -->
      <div v-if="!selectedEvent">
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Etkinlik Seçin *
        </label>
        <select 
          v-model="form.eventId" 
          required 
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="">Lütfen etkinlik seçin</option>
          <option v-for="event in availableEvents" :key="event.id" :value="event.id">
            {{ event.title }} - {{ formatEventDateShort(event.date) }}
          </option>
        </select>
      </div>

      <!-- Kişisel Bilgiler -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Ad *
          </label>
          <input 
            v-model="form.firstName" 
            type="text" 
            required 
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Soyad *
          </label>
          <input 
            v-model="form.lastName" 
            type="text" 
            required 
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            E-posta *
          </label>
          <input 
            v-model="form.email" 
            type="email" 
            required 
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Telefon *
          </label>
          <input 
            v-model="form.phone" 
            type="tel" 
            required 
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
        </div>
      </div>

      <!-- Satış Bilgileri -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Satacağınız Ürün Kategorisi *
        </label>
        <select 
          v-model="form.productCategory" 
          required 
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="">Kategori seçin</option>
          <option value="vintage-giyim">Vintage Giyim</option>
          <option value="vintage-aksesuar">Vintage Aksesuar</option>
          <option value="antika">Antika</option>
          <option value="el-sanatlari">El Sanatları</option>
          <option value="tasarim">Tasarım Ürünleri</option>
          <option value="kitap">Kitap</option>
          <option value="plak">Plak/Müzik</option>
          <option value="diger">Diğer</option>
        </select>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Ürün Açıklaması *
        </label>
        <textarea 
          v-model="form.productDescription" 
          rows="4" 
          required 
          placeholder="Satacağınız ürünleri detaylı olarak açıklayın..."
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        ></textarea>
      </div>

      <!-- Masa Tercihi -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Masa Sayısı *
        </label>
        <select 
          v-model="form.tableCount" 
          required 
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="">Masa sayısı seçin</option>
          <option value="1">1 Masa</option>
          <option value="2">2 Masa</option>
          <option value="3">3 Masa</option>
          <option value="4">4 Masa</option>
          <option value="5">5 Masa veya daha fazla</option>
        </select>
      </div>

      <!-- Deneyim -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Satış Deneyimi
        </label>
        <div class="space-y-2">
          <label class="flex items-center">
            <input 
              v-model="form.experience" 
              type="radio" 
              value="first-time" 
              class="mr-2"
            >
            İlk kez satış yapacağım
          </label>
          <label class="flex items-center">
            <input 
              v-model="form.experience" 
              type="radio" 
              value="beginner" 
              class="mr-2"
            >
            1-3 kez satış yaptım
          </label>
          <label class="flex items-center">
            <input 
              v-model="form.experience" 
              type="radio" 
              value="experienced" 
              class="mr-2"
            >
            Deneyimliyim (3+ etkinlik)
          </label>
        </div>
      </div>

      <!-- Sosyal Medya -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Instagram Hesabı
        </label>
        <input 
          v-model="form.instagram" 
          type="text" 
          placeholder="@kullaniciadi"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
      </div>

      <!-- Ek Notlar -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Ek Notlar
        </label>
        <textarea 
          v-model="form.notes" 
          rows="3" 
          placeholder="Belirtmek istediğiniz özel durumlar varsa yazabilirsiniz..."
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        ></textarea>
      </div>

      <!-- Sözleşme Onayı -->
      <div class="space-y-3">
        <label class="flex items-start">
          <input 
            v-model="form.agreeTerms" 
            type="checkbox" 
            required 
            class="mr-3 mt-1"
          >
          <span class="text-sm text-gray-700">
            <strong>Satış Koşulları</strong>'nı okudum ve kabul ediyorum. *
          </span>
        </label>
        <label class="flex items-start">
          <input 
            v-model="form.agreeMarketing" 
            type="checkbox" 
            class="mr-3 mt-1"
          >
          <span class="text-sm text-gray-700">
            Etkinlik duyuruları ve pazarlama e-postaları almayı kabul ediyorum.
          </span>
        </label>
      </div>

      <!-- Gönder Butonu -->
      <div class="text-center">
        <button 
          type="submit" 
          :disabled="isSubmitting"
          class="bg-purple-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 disabled:opacity-50 transition-colors"
        >
          {{ isSubmitting ? 'Gönderiliyor...' : 'Başvuru Gönder' }}
        </button>
      </div>
    </form>

    <!-- Başvuru Sonucu -->
    <div v-if="submitMessage" class="mt-6 p-4 rounded-md" :class="submitSuccess ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'">
      {{ submitMessage }}
    </div>

    <!-- Bilgi Kutusu -->
    <div class="mt-12 p-6 bg-gray-50 rounded-lg">
      <h3 class="text-lg font-semibold mb-4">Başvuru Süreci</h3>
      <div class="space-y-3 text-sm text-gray-600">
        <div class="flex items-start">
          <span class="font-medium text-purple-600 mr-2">1.</span>
          <span>Başvurunuzu gönderin</span>
        </div>
        <div class="flex items-start">
          <span class="font-medium text-purple-600 mr-2">2.</span>
          <span>2-3 iş günü içinde değerlendirme yapılır</span>
        </div>
        <div class="flex items-start">
          <span class="font-medium text-purple-600 mr-2">3.</span>
          <span>Onay durumu e-posta ile bildirilir</span>
        </div>
        <div class="flex items-start">
          <span class="font-medium text-purple-600 mr-2">4.</span>
          <span>Onay sonrası masa ücreti ödemesi yapılır</span>
        </div>
        <div class="flex items-start">
          <span class="font-medium text-purple-600 mr-2">5.</span>
          <span>Etkinlik detayları ve kurulum bilgileri paylaşılır</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const { getUpcomingEvents, getEventById, formatEventDate, formatEventDateShort } = useEvents()

// Seçili etkinlik (URL'den gelen parametre)
const selectedEvent = computed(() => {
  const eventId = route.query.event
  return eventId ? getEventById(eventId) : null
})

// Mevcut etkinlikler
const availableEvents = computed(() => {
  return getUpcomingEvents().filter(event => event.applicationOpen)
})

// Form verileri
const form = ref({
  eventId: selectedEvent.value?.id || '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  productCategory: '',
  productDescription: '',
  tableCount: '',
  experience: '',
  instagram: '',
  notes: '',
  agreeTerms: false,
  agreeMarketing: false
})

// Form durumu
const isSubmitting = ref(false)
const submitMessage = ref('')
const submitSuccess = ref(false)

const submitApplication = async () => {
  isSubmitting.value = true
  submitMessage.value = ''
  
  try {
    // Gerçek uygulamada API çağrısı yapılacak
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Başarılı gönderim simülasyonu
    submitMessage.value = 'Başvurunuz başarıyla gönderildi! 2-3 iş günü içinde size geri dönüş yapılacaktır.'
    submitSuccess.value = true
    
    // Formu temizle
    form.value = {
      eventId: selectedEvent.value?.id || '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      productCategory: '',
      productDescription: '',
      tableCount: '',
      experience: '',
      instagram: '',
      notes: '',
      agreeTerms: false,
      agreeMarketing: false
    }
    
    // Sayfayı yukarı kaydır
    window.scrollTo({ top: 0, behavior: 'smooth' })
    
  } catch (error) {
    submitMessage.value = 'Başvuru gönderilirken bir hata oluştu. Lütfen tekrar deneyin.'
    submitSuccess.value = false
  } finally {
    isSubmitting.value = false
  }
}

// SEO
useHead({
  title: 'Satışçı Başvurusu - MüstesnaGaraj',
  meta: [
    { name: 'description', content: 'MüstesnaGaraj etkinliklerinde satış yapmak için başvuru yapın. Vintage, antika ve tasarım ürünlerinizi sergileyebilirsiniz.' }
  ]
})
</script>