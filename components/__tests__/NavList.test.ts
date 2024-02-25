import { describe, expect, it } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import NavList from '~/components/NavList.vue'

describe('navList component', () => {
  it('should render nav list', () => {
    const wrapper = shallowMount(NavList, {
      props: {
        list: [],
      },
    })

    expect(wrapper.find('[data-test="nav-list"]').exists()).toBe(true)
  })

  it('should render nav list items from props', () => {
    const mockPropsData = [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
    ]

    const wrapper = shallowMount(NavList, {
      propsData: {
        list: mockPropsData,
      },
    })

    const navItems = wrapper.findAll('[data-test="nav-item"]')

    expect(navItems.length).toBe(mockPropsData.length)
  })
})
