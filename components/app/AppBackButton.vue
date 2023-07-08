<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <button
    class="dark:hover:text-dark-gray-darken dark:hover:border-dark-gray-darken rounded-lg border border-orange-400 px-10 py-2 uppercase transition-all duration-300 hover:border-orange-400 hover:bg-orange-400 dark:hover:text-dark-gray"
    @click="router.back()"
  >
    Go Back
  </button>
</template>
