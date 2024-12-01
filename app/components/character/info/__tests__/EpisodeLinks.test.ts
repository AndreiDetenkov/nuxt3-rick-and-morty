import { enableAutoUnmount, shallowMount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import EpisodeLink from '~/components/character/info/EpisodeLinks.vue'

const episodesProp = ['S01E01', 'S01E02', 'S01E03']

describe('character info episode link component', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = shallowMount(EpisodeLink, {
      props: {
        episodes: episodesProp,
      },
      global: {
        stubs: {
          'nuxt-link': {
            template: '<a :to="JSON.stringify(to)"><slot/></a>',
            props: ['to'],
          },
        },
      },
    })
  })

  enableAutoUnmount(afterEach)

  it('should render component', () => {
    expect(wrapper.find('[data-test="wrapper-episode-link"]').exists()).toBe(true)
  })

  it('should render the correct number of episodes', () => {
    expect(wrapper.findAll('[data-test="episode-link"]').length).toBe(episodesProp.length)
  })

  it('should render the correct episode link', () => {
    expect(wrapper.find('[data-test="episode-link"]').text()).toBe(episodesProp[0])
  })

  it('should render the correct episode link path', () => {
    expect(wrapper.find('[data-test="episode-link"]').attributes('to')).toBe(
      JSON.stringify({
        name: 'episode-id',
        params: { id: episodesProp[0] },
      }),
    )
  })
})
