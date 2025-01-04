<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps({
  // eslint-disable-next-line vue/require-default-prop
  error: Object as () => NuxtError,
})
</script>

<template>
  <div v-if="error">
    <h1>{{ error.statusCode }}</h1>
    <pre>{{ error }}</pre>
    <NuxtLink to="/"> Go back home </NuxtLink>
  </div>
</template>
