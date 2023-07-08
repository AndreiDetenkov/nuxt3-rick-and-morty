<script setup lang="ts">
import LocationIcon from 'assets/icons/location.svg?skipsvgo'
import AccountIcon from '~/assets/icons/account.svg?skipsvgo'
import GenderIcon from '~/assets/icons/gender.svg?skipsvgo'
import PulseIcon from '~/assets/icons/pulse.svg?skipsvgo'
import AppSubTitle from '~/components/app/AppSubTitle.vue'
import { Character } from '~/utils/types'

const route = useRoute()
const { data } = await useFetch('/api/character/' + route.params.slug, {
  baseURL: 'https://rickandmortyapi.com',
})
const { status, gender, species, location, image, name } = data.value as Character

const list = computed(() => [
  {
    icon: PulseIcon,
    key: 'status:',
    value: status,
  },
  {
    icon: GenderIcon,
    key: 'gender:',
    value: gender,
  },
  {
    icon: AccountIcon,
    key: 'species:',
    value: species,
  },
  {
    icon: LocationIcon,
    key: 'location:',
    value: location.name,
  },
])
</script>

<template>
  <article>
    <section-hero />

    <section class="app-container relative text-center">
      <nuxt-img
        :src="image"
        :alt="name"
        loading="lazy"
        class="absolute left-0 right-0 top-[-70px] m-auto max-w-xs rounded-lg shadow-lg shadow-dark-gray"
      />

      <app-sub-title :title="name" class="mb-8 mt-[200px]" />

      <ul class="mb-14">
        <li
          v-for="{ icon, key, value } in list"
          :key="key"
          class="mb-4 flex items-center justify-center"
        >
          <component :is="icon" class="mr-2 h-7 w-7 dark:fill-gray-lighten" />
          <span class="text-sm text-gray dark:text-light-gray">{{ key }}</span>
          <b class="truncate text-xl md:text-xl"> &nbsp;{{ value }} </b>
        </li>
      </ul>

      <app-back-button />
    </section>
  </article>
</template>
