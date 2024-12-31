<script setup lang="ts">
import type { CharactersByPage } from '~/shared/types'
import { Button } from '@/components/ui/button'
import SearchCharacterInput from '~/components/SearchCharacterInput.vue'
import { Pagination, PaginationEllipsis, PaginationFirst, PaginationLast, PaginationList, PaginationListItem, PaginationNext, PaginationPrev } from '~/components/ui/pagination'

useSeoMeta({
  title: 'Rick and Morty - Characters Page',
  ogTitle: 'Rick and Morty - Characters Page',
  description: 'Rick and Morty all characters',
  ogDescription: 'Rick and Morty all characters',
  ogImage: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
})

const characters = ref<CharactersByPage>()
const currentPage = ref(1)

const { $api } = useNuxtApp()
const { data } = await useAsyncData(() => $api.characters.getByPage(currentPage.value))
if (data.value) {
  characters.value = data.value
}
</script>

<template>
  <SectionCharacters v-if="characters?.results">
    <template #search>
      <SearchCharacterInput />
    </template>

    <CharacterCard
      v-for="character in characters?.results"
      :key="character.id.toString()"
      :character="character"
    />

    <template #pagination>
      <div class="mt-10 flex justify-center">
        <Pagination v-slot="{ page }" :total="characters?.info.count" :items-per-page="20" show-edges :sibling-count="1" :default-page="currentPage">
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
            <PaginationLast @click="currentPage = characters?.info.pages" />
          </PaginationList>
        </Pagination>
      </div>
    </template>
  </SectionCharacters>
</template>
