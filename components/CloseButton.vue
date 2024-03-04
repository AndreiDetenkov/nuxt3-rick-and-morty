<script setup lang="ts">
defineEmits(['onClick'])
</script>

<template>
  <button
    data-test="close-button"
    class="
      w-10
      h-10
      rounded-full
      border
      bg-white
      dark:bg-neutral-800
      flex
      justify-center
      items-center
      text-primary
      dark:text-primary-lighter
      font-medium
      text-xl
      cursor-pointer
      hover:bg-orange-400
      dark:hover:bg-orange-400
      transition duration-300"
    @click="$emit('onClick')"
  >
    X
  </button>
</template>
