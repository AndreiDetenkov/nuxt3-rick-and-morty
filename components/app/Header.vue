<script setup lang="ts">
import Logo from 'assets/icons/logo.svg'
</script>

<template>
  <header class="header">
    <nav class="nav">
      <NuxtLink to="/">
        <Logo class="logo" />
      </NuxtLink>

      <div class="flex flex-row items-center justify-center">
        <NuxtLink to="/characters" class="mr-7 text-lg font-bold text-[#333]">
          Characters
        </NuxtLink>
        <NuxtLink to="/episodes" class="text-lg font-bold text-[#333]">
          Episodes
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>

<style scoped lang="scss">
.header {
  @apply m-auto px-6;
}

.nav {
  @apply flex min-h-[60px] w-full flex-row items-center justify-between;
}

.logo {
  @apply h-auto w-10 fill-[#333];
}
</style>
