<script setup lang="ts">
import NavList from '~/components/Navigation.vue'
import ToggleColorMode from '~/components/ToggleColorMode.vue'
</script>

<template>
  <header class="relative flex min-h-[60px] w-full flex-row items-center justify-between px-6">
    <NuxtLink to="/">
      <svgo-logo class="h-auto w-10 fill-primary dark:fill-primary-light" />
    </NuxtLink>

    <nav class="flex flex-row items-center space-x-6">
      <NavList />
      <ToggleColorMode />
    </nav>
  </header>
</template>
