<script setup lang="ts">
import { Search } from 'lucide-vue-next'
import { Input } from '~/components/ui/input'

const emit = defineEmits<{
  search: [searchValue: string]
}>()

const searchValue = ref('')
</script>

<template>
  <div class="relative flex w-full max-w-sm items-center gap-1.5 mb-10">
    <Input
      id="search"
      v-model="searchValue"
      type="text"
      placeholder="Type character's name"
      class="pl-10"
      @keyup.enter="emit('search', searchValue)"
    />
    <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
      <Search class="size-6 text-muted-foreground text-primary dark:text-primary-light" />
    </span>
  </div>
</template>
