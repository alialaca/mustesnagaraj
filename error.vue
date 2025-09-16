<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="max-w-md w-full mx-auto text-center px-4">
      <div class="mb-8">
        <h1 class="text-6xl font-bold text-purple-600 mb-4">404</h1>
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Sayfa Bulunamadı</h2>
        <p class="text-gray-600 mb-8">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir.
        </p>
      </div>
      
      <div class="space-y-4">
        <NuxtLink 
          to="/" 
          class="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
        >
          Anasayfaya Dön
        </NuxtLink>
        
        <div class="mt-4">
          <NuxtLink 
            to="/etkinlikler" 
            class="text-purple-600 hover:text-purple-800 underline"
          >
            Etkinlikleri Görüntüle
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// SEO
useHead({
  title: 'Sayfa Bulunamadı - MüstesnaGaraj',
  meta: [
    { 
      name: 'description', 
      content: 'Aradığınız sayfa bulunamadı. MüstesnaGaraj anasayfasına dönün.' 
    }
  ]
})
</script>