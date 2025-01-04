<script setup lang="ts">
import { Search } from 'lucide-vue-next'
import { Input } from '~/components/ui/input'

defineProps<{
  placeholder: string
}>()

const emit = defineEmits<{
  search: [searchValue: string]
}>()

const searchValue = ref('')
</script>

<template>
  <div class="relative mb-10 flex w-full max-w-sm items-center gap-1.5">
    <Input
      id="search"
      v-model="searchValue"
      type="text"
      :placeholder="placeholder"
      class="pl-10"
      @keyup.enter="emit('search', searchValue)"
    />
    <span class="absolute inset-y-0 start-0 flex items-center justify-center px-2">
      <Search class="text-muted-foreground size-6 text-primary dark:text-primary-light" />
    </span>
  </div>
</template>
