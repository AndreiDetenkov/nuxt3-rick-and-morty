import { describe, expect, it } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import TheHeader from '~/components/TheHeader/TheHeader.vue'

describe('theHeader components', () => {
  it('should render the header', () => {
    const wrapper = shallowMount(TheHeader)

    expect(wrapper.find('header').exists()).toBe(true)
  })

  it('should display named slots it the are exists', () => {
    const wrapper = shallowMount(TheHeader, {
      slots: {
        logo: '<div>Logo slot</div>',
        nav: '<div>Nav slot</div>',
      },
    })

    expect(wrapper.html()).toContain('<div>Logo slot</div>')
    expect(wrapper.html()).toContain('<div>Nav slot</div>')
  })
})
