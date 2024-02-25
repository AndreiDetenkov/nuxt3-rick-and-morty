import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import TheHeader from '~/components/TheHeader.vue'

describe('theHeader components', () => {
  it('should render the header', () => {
    const wrapper = mount(TheHeader)

    expect(wrapper.find('header').exists()).toBe(true)
  })

  it('should display named slots it the are exists', () => {
    const wrapper = mount(TheHeader, {
      slots: {
        logo: '<div>Logo slot</div>',
        nav: '<div>Nav slot</div>',
      },
    })

    expect(wrapper.html()).toContain('<div>Logo slot</div>')
    expect(wrapper.html()).toContain('<div>Nav slot</div>')
  })
})
