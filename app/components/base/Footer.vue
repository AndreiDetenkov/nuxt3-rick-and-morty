<script setup lang="ts">
import IconCurrency from 'assets/icons/currency.svg'
import IconGithub from 'assets/icons/github.svg'
import IconTwitter from 'assets/icons/twitter.svg'

const navItems = [
  { icon: IconGithub, link: 'https://github.com/afuh/rick-and-morty-api', testId: 'github-link' },
  { icon: IconTwitter, link: 'https://twitter.com/rickandmortyapi', testId: 'twitter-link' },
  { icon: IconCurrency, link: 'https://rickandmortyapi.com/support-us', testId: 'support-link' },
]
</script>

<template>
  <footer data-test="footer">
    <base-container class="flex items-center justify-center space-x-6 px-4 py-6">
      <nuxt-link
        v-for="item in navItems"
        :key="item.testId"
        :to="item.link"
        target="_blank"
        rel="noopener noreferrer"
        :data-test="item.testId"
      >
        <component
          :is="item.icon"
          class="h-6 w-6 fill-primary-light transition duration-300 hover:fill-orange-400"
        />
      </nuxt-link>
    </base-container>
  </footer>
</template>
