<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <h1 class="text-3xl font-bold mb-8">İletişim</h1>
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- İletişim Bilgileri -->
      <div>
        <h2 class="text-2xl font-semibold mb-6">Bize Ulaşın</h2>
        <div class="space-y-4">
          <div class="flex items-center">
            <svg class="h-5 w-5 text-purple-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>info@mustesnagaraj.com</span>
          </div>
          <div class="flex items-center">
            <svg class="h-5 w-5 text-purple-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>+90 (555) 123 45 67</span>
          </div>
          <div class="flex items-center">
            <svg class="h-5 w-5 text-purple-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>İstanbul, Türkiye</span>
          </div>
        </div>

        <div class="mt-8">
          <h3 class="text-lg font-semibold mb-4">Satışçı Olmak İsterseniz</h3>
          <p class="text-gray-600 mb-4">
            Etkinliklerimizde satış yapmak istiyorsanız, aşağıdaki formu doldurarak başvurunuzu yapabilirsiniz.
          </p>
          <NuxtLink to="/satisci-basvuru" class="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
            Satışçı Başvurusu
          </NuxtLink>
        </div>
      </div>

      <!-- İletişim Formu -->
      <div>
        <h2 class="text-2xl font-semibold mb-6">Mesaj Gönder</h2>
        <form @submit.prevent="submitForm" class="space-y-4">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Ad Soyad</label>
            <input v-model="form.name" type="text" id="name" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">E-posta</label>
            <input v-model="form.email" type="email" id="email" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
          </div>
          <div>
            <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">Konu</label>
            <input v-model="form.subject" type="text" id="subject" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
          </div>
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Mesaj</label>
            <textarea v-model="form.message" id="message" rows="5" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"></textarea>
          </div>
          <button type="submit" :disabled="isSubmitting" class="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 disabled:opacity-50 transition-colors">
            {{ isSubmitting ? 'Gönderiliyor...' : 'Mesaj Gönder' }}
          </button>
        </form>
        
        <div v-if="submitMessage" class="mt-4 p-3 rounded-md" :class="submitSuccess ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'">
          {{ submitMessage }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitSuccess = ref(false)

const submitForm = async () => {
  isSubmitting.value = true
  submitMessage.value = ''
  
  try {
    // Gerçek formda burada API çağrısı yapılacak
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    submitMessage.value = 'Mesajınız başarıyla gönderildi. En kısa sürede size geri dönüş yapacağız.'
    submitSuccess.value = true
    
    // Formu temizle
    form.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  } catch (error) {
    submitMessage.value = 'Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.'
    submitSuccess.value = false
  } finally {
    isSubmitting.value = false
  }
}

// SEO
useHead({
  title: 'İletişim - MüstesnaGaraj',
  meta: [
    { name: 'description', content: 'MüstesnaGaraj ile iletişime geçin. Sorularınız için bize ulaşın.' }
  ]
})
</script>