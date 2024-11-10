<script setup lang="ts">
const prop = defineProps<{
  pages: number
}>()

const emit = defineEmits<{
  prev: [number]
  next: [number]
}>()

const defaultPage = 1
const page = ref<number>(defaultPage)

function prevAction() {
  if (page.value > defaultPage) {
    page.value--
    emit('prev', page.value)
  }
}

function nextAction() {
  if (page.value < prop.pages) {
    page.value++
    emit('next', page.value)
  }
}
</script>

<template>
  <nav aria-label="pagination">
    <ul class="inline-flex -space-x-px text-base h-10">
      <li>
        <button
          class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-primary-dark dark:border-gray-700 dark:text-gray-400 dark:hover:bg-primary dark:hover:text-primary-lighter"
          @click="prevAction"
        >
          Previous
        </button>
      </li>

      <li>
        <span aria-current="page" class="flex items-center justify-center px-4 h-10 text-gray-700 border bg-white border-gray-300 dark:border-gray-700 dark:bg-primary-dark dark:text-gray-300">
          {{ page }} of {{ prop.pages }}
        </span>
      </li>

      <li>
        <button
          class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-primary-dark dark:border-gray-700 dark:text-gray-400 dark:hover:bg-primary dark:hover:text-primary-lighter"
          @click="nextAction"
        >
          Next
        </button>
      </li>
    </ul>
  </nav>
</template>
