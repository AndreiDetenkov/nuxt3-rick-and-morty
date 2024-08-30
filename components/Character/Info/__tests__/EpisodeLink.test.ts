import { describe, expect, it } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import EpisodeLink from '~/components/Character/Info/EpisodeLink.vue'

const episodesPropTest = ['S01E01', 'S01E02', 'S01E03']

function factory(args?: any) {
  return shallowMount(EpisodeLink, {
    props: {
      episodes: episodesPropTest,
    },
    global: {
      stubs: {
        'nuxt-link': {
          template: '<a><slot/></a>',
        },
      },
    },
    ...args,
  })
}

describe('character info episode link component', () => {
  it('should render component', () => {
    const wrapper = factory()

    expect(wrapper.find('[data-test="wrapper-episode-link"]').exists()).toBe(true)
  })

  it('should render the correct number of episodes', () => {
    const wrapper = factory()

    expect(wrapper.findAll('[data-test="episode-link"]').length).toBe(episodesPropTest.length)
  })

  it('should render the correct episode link', () => {
    const wrapper = factory()

    expect(wrapper.find('[data-test="episode-link"]').text()).toBe(episodesPropTest[0])
  })

  it('should render the correct episode link path', () => {
    const wrapper = factory()

    expect(wrapper.find('[data-test="episode-link"]').attributes('to')).toBe(`/episode/${episodesPropTest[0]}`)
  })
})
