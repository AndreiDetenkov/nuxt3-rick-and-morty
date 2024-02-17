<script setup lang="ts">
</script>

<template>
  <header class="relative flex min-h-[60px] w-full flex-row items-center justify-between px-6">
    <slot name="logo" />

    <nav class="flex flex-row items-center space-x-6">
      <slot name="nav" />
    </nav>
  </header>
</template>
