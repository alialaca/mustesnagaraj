<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="text-center mb-12">
      <div class="flex justify-center items-center mb-6">
        <img 
          :src="logoBlack" 
          alt="MüstesnaGaraj Logo" 
          class="h-20 w-auto mr-4"
        >
        <h1 class="text-4xl font-bold">
          <span class="font-semibold">Müstesna</span><span class="font-light">Garaj</span>
        </h1>
      </div>
      <p class="text-xl text-gray-600">
        "Modaya değil, hikayeye yatırım"
      </p>
    </div>
    
    <div class="prose max-w-none">
      <div class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">MüstesnaGaraj Nedir?</h2>
        <p class="text-gray-700 mb-4">
          Müstesna Garaj, ikinci el ve tasarım odaklı sürdürülebilir alışveriş kültürünü İzmir’de yaygınlaştırmayı amaçlayan yaratıcı bir pazar etkinliğidir. Moda, tasarım ve geri dönüşüm kavramlarını bir araya getirerek hem çevre bilincini artırmakta hem de bağımsız üreticilere görünürlük sağlamaktadır
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">Misyonumuz</h2>
        <p class="text-gray-700 mb-4">
          Sürdürülebilir tüketimi teşvik ederek, vintage ve 2. el ürünlere yeni hayat kazandırmak, 
          tasarımcıları desteklemek ve alıcılar ile satıcıları bir araya getirerek eşsiz bir alışveriş deneyimi sunmak.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">Nasıl Çalışıyoruz?</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-gray-50 p-6 rounded-lg">
            <h3 class="font-semibold mb-2">Satışçılar İçin</h3>
            <ul class="text-gray-700 space-y-2">
              <li>• Etkinlik seçimi yapın</li>
              <li>• Masa kiralama başvurusu yapın</li>
              <li>• Ürünlerinizi sergileyin</li>
              <li>• Satış yapın ve gelir elde edin</li>
            </ul>
          </div>
          <div class="bg-gray-50 p-6 rounded-lg">
            <h3 class="font-semibold mb-2">Alıcılar İçin</h3>
            <ul class="text-gray-700 space-y-2">
              <li>• Etkinlik takvimini takip edin</li>
              <li>• Eşsiz ürünleri keşfedin</li>
              <li>• Vintage ve tasarım ürünler bulun</li>
              <li>• Sosyal alışveriş deneyimi yaşayın</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">Değerlerimiz</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="text-center">
            <div class="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span class="text-purple-600 text-2xl">♻️</span>
            </div>
            <h3 class="font-semibold mb-2">Sürdürülebilirlik</h3>
            <p class="text-gray-600 text-sm">Çevre dostu tüketim alışkanlıklarını teşvik ediyoruz</p>
          </div>
          <div class="text-center">
            <div class="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span class="text-purple-600 text-2xl">🎨</span>
            </div>
            <h3 class="font-semibold mb-2">Yaratıcılık</h3>
            <p class="text-gray-600 text-sm">Tasarımcıları ve sanatçıları destekliyoruz</p>
          </div>
          <div class="text-center">
            <div class="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span class="text-purple-600 text-2xl">🤝</span>
            </div>
            <h3 class="font-semibold mb-2">Topluluk</h3>
            <p class="text-gray-600 text-sm">Güçlü bir topluluk oluşturuyoruz</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import logoBlack from '~/assets/images/logo_black.png'

// SEO
useHead({
  title: 'Hakkımızda - MüstesnaGaraj',
  meta: [
    { name: 'description', content: 'MüstesnaGaraj hakkında bilgi edinin. Misyonumuz, değerlerimiz ve nasıl çalıştığımızı öğrenin.' }
  ]
})
</script>