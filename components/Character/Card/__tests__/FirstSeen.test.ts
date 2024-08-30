import { shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import FirstSeen from '@/components/Character/Card/FirstSeen.vue'

const episode = 'S01E01'

function factory(args?: any) {
  return shallowMount(FirstSeen, {
    props: { episode },
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

describe('firstSeen component', () => {
  it('should render the correct link path', () => {
    const wrapper = factory()

    expect(wrapper.find('[data-test="episode-link"]').attributes('to')).toEqual(`/episode/${episode}`)
  })

  it('should render the correct episode', () => {
    const wrapper = factory()

    expect(wrapper.find('[data-test="episode-title"]').text()).toBe(`episode: ${episode}`)
  })
})
