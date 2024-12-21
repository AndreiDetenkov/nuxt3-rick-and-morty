<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-vue-next'
import { Pagination, PaginationEllipsis, PaginationFirst, PaginationLast, PaginationList, PaginationListItem, PaginationNext, PaginationPrev } from '~/components/ui/pagination'

useSeoMeta({
  title: 'Rick and Morty - Characters Page',
  ogTitle: 'Rick and Morty - Characters Page',
  description: 'Rick and Morty all characters',
  ogDescription: 'Rick and Morty all characters',
  ogImage: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
})

const currentPage = ref(1)

const { $api } = useNuxtApp()
const { data } = await useAsyncData(
  `characters.scope.${currentPage.value}`,
  () => $api.characters.getByPage(currentPage.value),
  { watch: [currentPage] },
)
</script>

<template>
  <section-characters v-if="data">
    <template #search>
      <div class="relative flex w-full max-w-sm items-center gap-1.5 mb-10">
        <Input id="search" type="text" placeholder="Search..." class="pl-10" />
        <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
          <Search class="size-6 text-muted-foreground text-primary dark:text-primary-light" />
        </span>
      </div>
    </template>

    <character-card
      v-for="character in data.results"
      :key="character.id.toString()"
      :character="character"
    />

    <template #pagination>
      <div class="mt-10 flex justify-center">
        <Pagination v-slot="{ page }" :total="data.info.count" :items-per-page="20" show-edges :sibling-count="1" :default-page="currentPage">
          <PaginationList v-slot="{ items }" class="flex items-center gap-1">
            <PaginationFirst @click="currentPage = 1" />
            <PaginationPrev @click="currentPage--" />

            <template v-for="(item, index) in items">
              <PaginationListItem v-if="item.type === 'page'" :key="index" :value="item.value" as-child>
                <Button class="w-10 h-10 p-0" :variant="item.value === page ? 'default' : 'outline'" @click="currentPage = item.value">
                  {{ item.value }}
                </Button>
              </PaginationListItem>
              <PaginationEllipsis v-else :key="item.type" :index="index" />
            </template>

            <PaginationNext @click="currentPage++" />
            <PaginationLast @click="currentPage = data.info.pages" />
          </PaginationList>
        </Pagination>
      </div>
    </template>
  </section-characters>
</template>
