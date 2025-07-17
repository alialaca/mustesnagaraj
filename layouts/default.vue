<template>
  <div class="min-h-screen bg-gray-50">
    <header
      :class="[
        'fixed w-full top-0 z-50 transition-all duration-300',
        isScrolled || !isHomePage ? 'bg-white shadow-sm' : 'bg-transparent'
      ]"
    >
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center">
            <NuxtLink
              to="/"
              class="flex items-center space-x-3"
            >
              <img
                :src="isScrolled || !isHomePage ? logoBlack : logoWhite"
                alt="MüstesnaGaraj Logo"
                class="h-10 w-auto"
              >
              <div
                :class="[
                  'text-xl transition-colors',
                  isScrolled || !isHomePage ? 'text-gray-900' : 'text-white'
                ]"
              >
                <span class="font-semibold">Müstesna</span><span class="font-light"> Garaj</span>
              </div>
            </NuxtLink>
          </div>
          <div class="hidden md:flex space-x-8">
            <NuxtLink
              to="/"
              :class="[
                'transition-colors',
                isScrolled || !isHomePage ? 'text-gray-700 hover:text-gray-900' : 'text-white hover:text-gray-200'
              ]"
            >
              Ana Sayfa
            </NuxtLink>
            <NuxtLink
              to="/etkinlikler"
              :class="[
                'transition-colors',
                isScrolled || !isHomePage ? 'text-gray-700 hover:text-gray-900' : 'text-white hover:text-gray-200'
              ]"
            >
              Etkinlikler
            </NuxtLink>
            <NuxtLink
              to="/hakkimizda"
              :class="[
                'transition-colors',
                isScrolled || !isHomePage ? 'text-gray-700 hover:text-gray-900' : 'text-white hover:text-gray-200'
              ]"
            >
              Hakkımızda
            </NuxtLink>
            <NuxtLink
              to="/iletisim"
              :class="[
                'transition-colors',
                isScrolled || !isHomePage ? 'text-gray-700 hover:text-gray-900' : 'text-white hover:text-gray-200'
              ]"
            >
              İletişim
            </NuxtLink>
          </div>
          <div class="md:hidden">
            <button
              @click="mobileMenuOpen = !mobileMenuOpen"
              :class="[
                'transition-colors',
                isScrolled || !isHomePage ? 'text-gray-700' : 'text-white'
              ]"
            >
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        <div v-if="mobileMenuOpen" class="md:hidden bg-white border-t">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NuxtLink to="/" class="block px-3 py-2 text-gray-700 hover:text-gray-900">Ana Sayfa</NuxtLink>
            <NuxtLink to="/etkinlikler" class="block px-3 py-2 text-gray-700 hover:text-gray-900">Etkinlikler</NuxtLink>
            <NuxtLink to="/hakkimizda" class="block px-3 py-2 text-gray-700 hover:text-gray-900">Hakkımızda</NuxtLink>
            <NuxtLink to="/iletisim" class="block px-3 py-2 text-gray-700 hover:text-gray-900">İletişim</NuxtLink>
          </div>
        </div>
      </nav>
    </header>

    <main :class="isHomePage ? '' : 'pt-16'">
      <slot />
    </main>

    <footer class="bg-gray-900 text-white">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div class="flex items-center space-x-3 mb-4">
              <img
                :src="logoWhite"
                alt="MüstesnaGaraj Logo"
                class="h-8 w-auto"
              >
              <h3 class="text-lg">
                <span class="font-semibold">Müstesna</span><span class="font-light"> Garaj</span>
              </h3>
            </div>
            <small class="text-gray-300">Müstesna Garaj, ikinci el ve tasarım odaklı sürdürülebilir alışveriş kültürünü İzmir’de yaygınlaştırmayı amaçlayan yaratıcı bir pazar etkinliğidir. Moda, tasarım ve geri dönüşüm kavramlarını bir araya getirerek hem çevre bilincini artırmakta hem de bağımsız üreticilere görünürlük sağlamaktadır.</small>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">Hızlı Linkler</h3>
            <ul class="space-y-2">
              <li><NuxtLink to="/etkinlikler" class="text-gray-300 hover:text-white">Etkinlikler</NuxtLink></li>
              <li><NuxtLink to="/hakkimizda" class="text-gray-300 hover:text-white">Hakkımızda</NuxtLink></li>
              <li><NuxtLink to="/iletisim" class="text-gray-300 hover:text-white">İletişim</NuxtLink></li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">İletişim</h3>
            <div class="space-y-2">
              <a 
                href="mailto:info@mustesnagaraj.com"
                class="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                info@mustesnagaraj.com
              </a>
              <a 
                href="https://www.instagram.com/mustesnagaraj/" 
                target="_blank" 
                rel="noopener noreferrer"
                class="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                @mustesnagaraj
              </a>
            </div>
          </div>
        </div>
        <div class="mt-8 pt-8 border-t border-gray-800 text-center text-gray-300">
          <p>&copy; 2025 MüstesnaGaraj. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import logoBlack from '~/assets/images/logo_black.png'
import logoWhite from '~/assets/images/logo_white.png'

const mobileMenuOpen = ref(false)
const isScrolled = ref(false)
const route = useRoute()

const isHomePage = computed(() => route.path === '/')

onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 100
  }

  window.addEventListener('scroll', handleScroll)

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})
</script>