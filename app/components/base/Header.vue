<script setup lang="ts">
</script>

<template>
  <base-container>
    <div class="relative min-h-[60px] w-full flex items-center py-4">
      <slot name="logo" />
      <slot />
    </div>
  </base-container>
</template>
