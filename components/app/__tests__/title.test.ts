import { shallowMount } from '@vue/test-utils'
import { describe, it } from 'vitest'
import AppTitle from '../Title.vue'

describe('AppTitle', () => {
  it('should render title prop', () => {
    const title = 'my_title'
    const wrapper = shallowMount(AppTitle, {
      propsData: { title },
    })

    expect(wrapper.text()).toContain(title)
  })
})
