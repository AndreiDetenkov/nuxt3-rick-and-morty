import { shallowMount } from '@vue/test-utils'
import { describe, it } from 'vitest'
import AppSubTitle from '../SubTitle.vue'

describe('AppTitle', () => {
  it('should render title prop', () => {
    const title = 'my_subtitle'
    const wrapper = shallowMount(AppSubTitle, {
      propsData: { title },
    })
    expect(wrapper.text()).toContain(title)
  })
})
