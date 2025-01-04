<script setup lang="ts">
import { StatusEnum } from '~/shared/types'

const props = defineProps<{ status: string }>()

const statusColor = computed(() => {
  if (props.status === StatusEnum.Dead) return 'bg-red-500'
  if (props.status === StatusEnum.Alive) return 'bg-green-500'
  return 'bg-neutral-400'
})
</script>

<template>
  <div class="mr-1.5 h-3 w-3 rounded-full" :class="statusColor" />
</template>
