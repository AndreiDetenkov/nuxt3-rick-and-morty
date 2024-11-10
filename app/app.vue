<script setup lang="ts">
import Navigation from '~/components/Navigation.vue'
import TheFooter from '~/components/TheFooter.vue'
import TheHeader from '~/components/TheHeader.vue'
import TheLogo from '~/components/TheLogo.vue'
import ToggleColorMode from '~/components/ToggleColorMode.client.vue'

const colorMode = useColorMode()

const isDarkMode = computed(() => {
  return colorMode.preference === 'dark'
})

function toggleColorMode(preference: string) {
  colorMode.preference = preference === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <NuxtLoadingIndicator />
  <div class="h-dvh w-dvw flex flex-col">
    <TheHeader>
      <template #logo>
        <TheLogo />
      </template>

      <template #nav>
        <Navigation />
        <ToggleColorMode :is-dark-mode="isDarkMode" @toggle-color-mode="toggleColorMode" />
      </template>
    </TheHeader>

    <main class="flex-1">
      <NuxtPage />
    </main>

    <TheFooter />
  </div>
</template>
