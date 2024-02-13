<script setup lang="ts">
import TheHeader from "~/components/the-header.vue";
import TheFooter from "~/components/the-footer.vue";
</script>

<template>
  <NuxtLoadingIndicator/>
  <div class="container flex h-dvh flex-col">
    <the-header/>
    <main class="flex-1">
      <slot/>
    </main>
    <the-footer/>
  </div>
</template>
