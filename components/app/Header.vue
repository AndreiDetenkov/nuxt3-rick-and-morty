<script setup lang="ts">
import Logo from 'assets/icons/logo.svg?skipsvgo'
</script>

<template>
  <header
    class="m-auto flex h-[60px] w-full flex-row items-center justify-between px-6"
  >
    <NuxtLink to="/">
      <Logo class="h-auto w-10 fill-dark-gray" />
    </NuxtLink>

    <nav class="flex flex-row items-center space-x-6">
      <HeaderMenu />

      <div class="flex items-center border-l border-neutral-400 pl-6">
        <ToggleDarkMode />
      </div>
    </nav>
  </header>
</template>
