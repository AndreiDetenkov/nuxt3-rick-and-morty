<script setup>
import IconLogo from '~/assets/icons/logo.svg'
</script>

<template>
  <NuxtLink to="/" data-test="logo">
    <IconLogo class="h-auto w-10 fill-primary dark:fill-primary-light" />
  </NuxtLink>
</template>
