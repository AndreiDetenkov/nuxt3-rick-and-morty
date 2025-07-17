<script setup lang="ts">
import { StatusEnum } from '~/shared/types'
import { cn } from '~/lib/utils'

const { status } = defineProps<{ status: string }>()

const statusClasses = cn({
  'bg-red-500': status === StatusEnum.Dead,
  'bg-green-500': status === StatusEnum.Alive,
  'bg-neutral-400': status === StatusEnum.unknown,
})
</script>

<template>
  <div class="mr-1.5 h-3 w-3 rounded-full" :class="statusClasses" />
</template>
