<script setup lang="ts">
import Navigation from '~/components/Navigation/Navigation.vue'
import TheFooter from '~/components/TheFooter.vue'
import TheHeader from '~/components/TheHeader/TheHeader.vue'
import TheLogo from '~/components/TheLogo/TheLogo.vue'
import ToggleColorMode from '~/components/ToggleColorMode/ToggleColorMode.client.vue'

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
  <div class="container h-dvh flex flex-col">
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
