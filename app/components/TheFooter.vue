<script setup lang="ts">

</script>

<template>
  <footer data-test="footer" class="flex items-center justify-center px-4 py-10 space-x-6">
    <NuxtLink to="https://github.com/afuh/rick-and-morty-api" target="_blank" data-test="github-link">
      <svgo-github class="w-6 h-6 fill-primary-light hover:fill-orange-400 transition duration-300" />
    </NuxtLink>

    <NuxtLink to="https://twitter.com/rickandmortyapi" target="_blank" data-test="twitter-link">
      <svgo-twitter class="w-6 h-6 fill-primary-light hover:fill-orange-400 transition duration-300" />
    </NuxtLink>

    <NuxtLink to="https://rickandmortyapi.com/support-us" target="_blank" data-test="support-link">
      <svgo-monster class="w-6 h-6 fill-primary-light hover:fill-orange-400 transition duration-300" />
    </NuxtLink>
  </footer>
</template>
