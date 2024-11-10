import Location from '@/components/Character/Card/Location.vue'
import { shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

const location = {
  id: '1',
  name: 'Earth',
  type: 'Planet',
}

function factory(args?: any) {
  return shallowMount(Location, {
    props: { location },
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

describe('location component', () => {
  it('should location component exist', () => {
    const wrapper = factory()

    expect(wrapper.find('[data-test="card-location"]').exists()).toBe(true)
  })

  it('should render the correct link path', () => {
    const wrapper = factory()

    expect(wrapper.find('[data-test="location-link"]').attributes('to')).toEqual(`/location/${location.id}`)
  })

  it('should render the correct location name', () => {
    const wrapper = factory()

    expect(wrapper.find('[data-test="location-name"]').text()).toBe(location.name)
  })
})
