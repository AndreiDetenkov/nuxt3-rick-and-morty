<script setup lang="ts">
import TheContainer from '~/components/TheContainer.vue'
</script>

<template>
  <TheContainer>
    <header class="relative flex min-h-[60px] w-full flex-row items-center justify-between py-4">
      <slot name="logo" />
      <slot name="nav" />
    </header>
  </TheContainer>
</template>
