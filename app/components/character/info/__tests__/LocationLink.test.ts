import { shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import LocationLink from '~/components/character/info/LocationLink.vue'

describe('character info location link component', () => {
  const locationProp = {
    name: 'Citadel of Ricks',
    id: '3',
  }

  it('should render location link', () => {
    const wrapper = shallowMount(LocationLink, {
      props: {
        location: locationProp,
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

    const link = wrapper.find('[data-test="location-link"]')
    expect(link.attributes('to')).toEqual(JSON.stringify({
      name: 'location-id',
      params: { id: locationProp.id },
    }))
    expect(wrapper.text()).toContain(`Location: ${locationProp.name}`)
  })
})
