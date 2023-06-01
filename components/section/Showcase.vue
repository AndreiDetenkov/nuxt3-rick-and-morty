<template>
  <section
    class="flex min-h-[calc(50vh_-_60px)] items-center justify-center bg-dark-gray-2 py-16 dark:bg-slate-800"
  >
    <div class="flex max-w-[1920px] flex-wrap items-center justify-center">
      <pre>{{ characters }}</pre>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  characters: any
}>()
const { characters } = toRefs(props)
</script>
