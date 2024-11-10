import { enableAutoUnmount, shallowMount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import Card from '~/components/Character/Card.vue'
import type { Character } from '~/stores/types'

const characterMock = {
  id: 1,
  name: 'Rick Sanchez',
  status: 'Alive',
  species: 'Human',
  type: '',
  gender: 'Male',
  origin: { name: 'Earth (C-137)', url: 'https://rickandmortyapi.com/api/location/1' },
  location: { name: 'Citadel of Ricks', url: 'https://rickandmortyapi.com/api/location/3' },
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  episode: ['https://rickandmortyapi.com/api/episode/1', 'https://rickandmortyapi.com/api/episode/2'],
  url: 'https://rickandmortyapi.com/api/character/1',
  created: '2017-11-04T18:48:46.250Z',
} as Character

describe('card component', () => {
  let wrapper: any
  enableAutoUnmount(afterEach)

  beforeEach(() => {
    wrapper = shallowMount(Card, {
      props: {
        character: characterMock,
      },
    })
  })

  it('should computed episode prop', () => {
    expect(wrapper.vm.episode).toBe('1')
  })

  it('should computed location prop', () => {
    expect(wrapper.vm.location).toEqual({
      name: 'Citadel of Ricks',
      id: '3',
    })
  })
})
