<script setup lang="ts">
import Logo from 'assets/icons/logo.svg'
</script>

<template>
  <header>
    <nav class="nav">
      <NuxtLink to="/">
        <Logo class="logo" />
      </NuxtLink>
    </nav>
  </header>
</template>

<style scoped lang="scss">
.nav {
  @apply flex min-h-[60px] w-full flex-row items-center justify-between px-[1.5rem];
}

.logo {
  @apply h-auto w-10 fill-[#333];
}
</style>
