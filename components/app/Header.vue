<script setup lang="ts">
import Logo from 'assets/icons/logo.svg'
</script>

<template>
  <header class="header">
    <nav class="header__nav">
      <NuxtLink to="/">
        <Logo class="logo" />
      </NuxtLink>

      <HeaderMenu />
    </nav>
  </header>
</template>

<style scoped lang="scss">
.header {
  @apply m-auto flex h-[60px] w-full flex-row items-center justify-center px-6;

  &__nav {
    @apply flex w-full flex-row items-center justify-between;
  }
}

.logo {
  @apply h-auto w-10 fill-[#333];
}
</style>
