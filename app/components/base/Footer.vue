<script setup lang="ts">
import IconCurrency from 'assets/icons/currency.svg'
import IconGithub from 'assets/icons/github.svg'
import IconTwitter from 'assets/icons/twitter.svg'

const navItems: {
  icon: string
  hrefLink: string
  testId: string
}[] = [
  {
    icon: IconGithub,
    hrefLink: 'https://github.com/afuh/rick-and-morty-api',
    testId: 'github-link',
  },
  { icon: IconTwitter, hrefLink: 'https://twitter.com/rickandmortyapi', testId: 'twitter-link' },
  {
    icon: IconCurrency,
    hrefLink: 'https://rickandmortyapi.com/support-us',
    testId: 'support-link',
  },
]
</script>

<template>
  <footer data-test="footer">
    <base-container class="flex items-center justify-center space-x-6 px-4 py-6">
      <a
        v-for="{ testId, icon, hrefLink } in navItems"
        :key="testId"
        :href="hrefLink"
        target="_blank"
        rel="noopener noreferrer"
        :data-test="testId"
      >
        <component
          :is="icon"
          class="h-6 w-6 fill-primary-light transition duration-300 hover:fill-orange-400"
        />
      </a>
    </base-container>
  </footer>
</template>
