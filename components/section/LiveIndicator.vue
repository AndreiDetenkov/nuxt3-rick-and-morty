<script setup lang="ts">
import { StatusEnum } from '~/utils/types'

const props = defineProps<{ status: string }>()

const statusColor = computed(() => {
  if (props.status === StatusEnum.Dead) return 'bg-red-500'
  if (props.status === StatusEnum.Alive) return 'bg-green-500'
  return 'bg-neutral-400'
})
</script>

<template>
  <span class="mr-1.5 h-2 w-2 rounded-full" :class="statusColor" />
</template>
