<script setup lang="ts">

</script>

<template>
  <footer class="flex items-center justify-center px-4 py-10 space-x-4">
    <NuxtLink to="https://github.com/afuh/rick-and-morty-api" target="_blank">
      <svgo-github class="w-8 h-8 fill-primary-light hover:fill-orange-400 transition duration-300" />
    </NuxtLink>

    <NuxtLink to="https://twitter.com/rickandmortyapi" target="_blank">
      <svgo-twitter class="w-8 h-8 fill-primary-light hover:fill-orange-400 transition duration-300" />
    </NuxtLink>

    <NuxtLink to="https://rickandmortyapi.com/support-us" target="_blank">
      <svgo-monster class="w-8 h-8 fill-primary-light hover:fill-orange-400 transition duration-300" />
    </NuxtLink>
  </footer>
</template>
