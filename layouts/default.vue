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
              :class="[
                'text-xl font-bold transition-colors',
                isScrolled || !isHomePage ? 'text-gray-900' : 'text-white'
              ]"
            >
              MüstesnaGaraj
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
            <h3 class="text-lg font-semibold mb-4">MüstesnaGaraj</h3>
            <p class="text-gray-300">Vintage, 2. el ve tasarım satış etkinlikleri organize eden platform.</p>
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
            <p class="text-gray-300">info@mustesnagaraj.com</p>
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