<template>
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
</template>

<script setup>
import emailjs from '@emailjs/browser'

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
    const templateParams = {
      from_name: form.value.name,
      from_email: form.value.email,
      subject: form.value.subject,
      message: form.value.message,
      to_email: 'info@mustesnagaraj.com'
    }

    const config = useRuntimeConfig()
    
    await emailjs.send(
      config.public.emailjsServiceId,
      config.public.emailjsTemplateId,
      templateParams,
      config.public.emailjsPublicKey
    )
    
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
    console.error('EmailJS Error:', error)
    submitMessage.value = 'Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.'
    submitSuccess.value = false
  } finally {
    isSubmitting.value = false
  }
}
</script>