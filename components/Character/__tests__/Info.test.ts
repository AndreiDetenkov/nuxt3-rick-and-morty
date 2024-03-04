import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { enableAutoUnmount, shallowMount } from '@vue/test-utils'
import Info from '~/components/Character/Info.vue'
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

  it('should render component', () => {
    expect(wrapper.find('[data-test="info"]').exists()).toBe(true)
  })

  it('should computed location prop', () => {
    expect(wrapper.vm.locationProp).toEqual({
      name: 'Citadel of Ricks',
      id: '3',
    })
  })

  it('should computed episodes prop', () => {
    expect(wrapper.vm.episodesProp).toEqual(['1', '2'])
  })
})
