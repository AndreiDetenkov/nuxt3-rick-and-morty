<script setup lang="ts">
import TheHeader from "~/components/the-header.vue";
import TheFooter from "~/components/the-footer.vue";
</script>

<template>
  <NuxtLoadingIndicator/>
  <the-header/>
  <slot/>
  <the-footer/>
</template>
