import { enableAutoUnmount, shallowMount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import Info from '~/components/character/Info.vue'
import type { Character } from '~/shared/types'

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
  episode: ['https://rickandmortyapi.com/api/episode/9', 'https://rickandmortyapi.com/api/episode/24'],
  url: 'https://rickandmortyapi.com/api/character/1',
  created: '2017-11-04T18:48:46.250Z',
} as Character

describe('info component', () => {
  let wrapper: any
  enableAutoUnmount(afterEach)

  beforeEach(() => {
    wrapper = shallowMount(Info, {
      props: {
        character: characterMock,
      },
    })
  })

  it('should render info component', () => {
    expect(wrapper.find('[data-test="info"]').exists()).toBe(true)
  })

  it('should computed location prop', () => {
    expect(wrapper.vm.location).toEqual({
      name: characterMock.location.name,
      id: '3',
    })
  })

  it('should computed episodes prop', () => {
    expect(wrapper.vm.episodes).toEqual(['9', '24'])
  })
})
