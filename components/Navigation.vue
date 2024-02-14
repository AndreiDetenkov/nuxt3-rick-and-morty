<script setup lang="ts">
interface MenuInterface {
  name: string
  path: string
}

const menu: MenuInterface[] = [
  {
    name: 'Characters',
    path: '/characters',
  },
]
</script>

<template>
  <div class="flex flex-row items-center justify-between space-x-7">
    <NuxtLink
      v-for="item in menu"
      :key="item.name"
      :to="item.path"
      class="text-lg font-bold text-[#333] transition-colors duration-300 hover:text-orange-400 dark:text-primary-light dark:transition-colors dark:duration-300 dark:hover:text-orange-400"
      active-class="text-orange-400"
    >
      {{ item.name }}
    </NuxtLink>
  </div>
</template>
