<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '~/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    :class="
      cn(
        'rounded-lg border border-slate-200 bg-transparent text-light-gray shadow-sm dark:border-primary dark:bg-neutral-800 dark:text-primary-light',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
