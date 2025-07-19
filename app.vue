<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
  watch(
      () => router.currentRoute.value.fullPath,
      () => {
        if (window.umami) {
          window.umami.track()
        }
      },
      { immediate: true }
  )
})
</script>