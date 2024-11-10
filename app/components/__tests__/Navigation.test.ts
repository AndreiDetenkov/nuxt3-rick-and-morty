import { shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Navigation from '~/components/Navigation.vue'

describe('navigation component', () => {
  it('should render component', () => {
    const wrapper = shallowMount(Navigation)

    expect(wrapper.find('[data-test="nav"]').exists()).toBe(true)
  })
})
