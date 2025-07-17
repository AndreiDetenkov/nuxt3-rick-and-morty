<script setup lang="ts">
import { Button } from '@/components/ui/button'
import SearchCharacterInput from '~/components/SearchCharacterInput.vue'
import {
  Pagination,
  PaginationEllipsis,
  PaginationFirst,
  PaginationLast,
  PaginationList,
  PaginationListItem,
  PaginationNext,
  PaginationPrev,
} from '~/components/ui/pagination'

useSeoMeta({
  title: 'Rick and Morty - Characters Page',
  ogTitle: 'Rick and Morty - Characters Page',
  description: 'View Rick and Morty all characters',
  ogDescription: 'View Rick and Morty all characters',
  ogImage: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  ogUrl: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  twitterTitle: 'Rick and Morty - Characters Page',
  twitterDescription: 'View Rick and Morty all characters',
  twitterImage: "'https://rickandmortyapi.com/api/character/avatar/11.jpeg",
  twitterCard: 'summary',
})

const DEFAULT_PAGE = 1

const searchCharacter = ref<string>('')
const currentPage = ref(DEFAULT_PAGE)

const { $api } = useNuxtApp()
const { data: charactersData } = await useAsyncData(
  'characters',
  () => $api.characters.filterCharacters(currentPage.value, searchCharacter.value),
  {
    watch: [currentPage, searchCharacter],
  },
)

const isCharacters = computed<boolean>(() => !!charactersData.value?.results.length)

async function setCharacter(searchValue: string) {
  searchCharacter.value = searchValue
}
</script>

<template>
  <BaseSection>
    <template #search>
      <SearchCharacterInput placeholder="Type character's name" @search="setCharacter" />
    </template>

    <template v-if="isCharacters" #default>
      <CharacterCard
        v-for="character in charactersData?.results"
        :key="character.id.toString()"
        :character="character"
      />
    </template>

    <template v-if="isCharacters" #pagination>
      <div class="mt-10 flex justify-center">
        <Pagination
          v-slot="{ page }"
          show-edges
          :total="charactersData?.info.count"
          :items-per-page="20"
          :sibling-count="1"
          :default-page="currentPage"
        >
          <PaginationList v-slot="{ items }" class="flex items-center gap-1">
            <PaginationFirst @click="currentPage = DEFAULT_PAGE" />
            <PaginationPrev @click="currentPage--" />

            <template v-for="(item, index) in items">
              <PaginationListItem
                v-if="item.type === 'page'"
                :key="index"
                :value="item.value"
                as-child
              >
                <Button
                  class="h-10 w-10 p-0"
                  :variant="item.value === page ? 'default' : 'outline'"
                  @click="currentPage = item.value"
                >
                  {{ item.value }}
                </Button>
              </PaginationListItem>
              <PaginationEllipsis v-else :key="item.type" :index="index" />
            </template>

            <PaginationNext @click="currentPage++" />
            <PaginationLast @click="currentPage = charactersData?.info.pages ?? DEFAULT_PAGE" />
          </PaginationList>
        </Pagination>
      </div>
    </template>
  </BaseSection>
</template>
