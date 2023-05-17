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
  {
    name: 'Episodes',
    path: '/episodes',
  },
]
</script>

<template>
  <div class="menu">
    <NuxtLink
      v-for="item in menu"
      :key="item.name"
      :to="item.path"
      class="menu__link"
      active-class="menu__link--active"
    >
      {{ item.name }}
    </NuxtLink>
  </div>
</template>

<style scoped lang="scss">
.menu {
  @apply flex flex-row items-center justify-between space-x-7;

  &__link {
    @apply text-lg font-bold text-[#333] transition-colors duration-300 hover:text-orange-400;

    &--active {
      @apply text-orange-400;
    }
  }
}
</style>
