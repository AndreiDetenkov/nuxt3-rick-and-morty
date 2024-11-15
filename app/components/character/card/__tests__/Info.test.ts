import { shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Info from '~/components/character/card/Info.vue'

const character = {
  id: '1',
  name: 'Rick Sanchez',
  status: 'Alive',
  species: 'Human',
}

function factory(args?: any) {
  return shallowMount(Info, {
    props: { character },
    global: {
      stubs: {
        'nuxt-link': {
          template: '<a><slot></slot></a>',
        },
      },
    },
    ...args,
  })
}

describe('info component', () => {
  it('should info component exist', () => {
    const wrapper = factory()

    expect(wrapper.find('[data-test="card-info"]').exists()).toBe(true)
  })

  it('should render the correct link path', () => {
    const wrapper = factory()

    expect(wrapper.find('[data-test="character-link"]').attributes('to')).toEqual(`/character/${character.id}`)
  })

  it('should render the correct character name', () => {
    const wrapper = factory()

    expect(wrapper.find('[data-test="character-name"]').text()).toBe(character.name)
  })

  it('should render the correct character status and species', () => {
    const wrapper = factory()

    expect(wrapper.find('[data-test="character-status"]').text()).toContain(`${character.status} - ${character.species}`)
  })

  it('should render the live indicator with the correct status', () => {
    const wrapper = factory()
    const liveIndicator = wrapper.findComponent({ name: 'LiveIndicator' })

    expect(liveIndicator.exists()).toBe(true)
    expect(liveIndicator.props('status')).toBe(character.status)
  })
})
