<script setup lang="ts">
const { name = '' } = defineProps<{
  image: string
  name?: string
}>()
</script>

<template>
  <div class="md:w-2/5">
    <nuxt-img
      :src="image"
      :alt="name"
      class="h-[240px] w-full object-contain mt-4 sm:mt-0 sm:object-cover md:h-full"
      preload
    />
  </div>
</template>
