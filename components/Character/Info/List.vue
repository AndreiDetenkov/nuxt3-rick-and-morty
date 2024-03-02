<script setup lang="ts">
interface ListProps {
  status: string
  species: string
  type: string
  gender: string
}

defineProps<{
  list: ListProps
}>()
</script>

<template>
  <ul class="text-xl mb-4 space-y-2">
    <li class="flex items-center">
      <svgo-pulse class="h-6 w-6 mr-2 fill-primary-light" />
      Status: {{ list.status }}
    </li>
    <li class="flex items-center">
      <svgo-location class="h-6 w-6 mr-2 fill-primary-light" />
      Species: {{ list.species }}
    </li>
    <li class="flex items-center">
      <svgo-account class="h-6 w-6 mr-2 fill-primary-light" />
      Type: {{ list.type ? list.type : 'unknown' }}
    </li>
    <li class="flex items-center">
      <svgo-gender class="h-6 w-6 mr-2 fill-primary-light" />
      Gender: {{ list.gender }}
    </li>
  </ul>
</template>
