import { enableAutoUnmount, shallowMount } from '@vue/test-utils'
import { afterEach, describe, expect, it } from 'vitest'
import NavItem from '~/components/navigation/Item.vue'

describe('nav item component', () => {
  enableAutoUnmount(afterEach)

  const mockPropsData = { name: 'Home', path: '/' }

  it('should render nav item', () => {
    const wrapper = shallowMount(NavItem, {
      props: {
        item: mockPropsData,
      },
    })

    expect(wrapper.find('[data-test="nav-item"]').exists()).toBe(true)
    expect(wrapper.findComponent('[data-test="nav-item"]').attributes('to')).toBe(mockPropsData.path)
  })
})
