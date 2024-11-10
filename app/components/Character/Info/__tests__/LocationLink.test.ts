import { shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import LocationLink from '~/components/Character/Info/LocationLink.vue'

describe('character info location link component', () => {
  const locationPropTest = {
    name: 'Citadel of Ricks',
    id: '3',
  }

  it('should render location link', () => {
    const wrapper = shallowMount(LocationLink, {
      props: {
        location: locationPropTest,
      },
      global: {
        stubs: {
          'nuxt-link': {
            template: '<a><slot/></a>',
          },
        },
      },
    })

    expect(wrapper.find('[data-test="location"]').exists()).toBe(true)
    expect(wrapper.find('[data-test="link"]').attributes('to')).toBe(`/location/${locationPropTest.id}`)
    expect(wrapper.find('[data-test="link"]').text()).toEqual(`Location - ${locationPropTest.name}`)
  })
})
