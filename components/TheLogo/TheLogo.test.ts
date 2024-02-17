import { describe, expect, it } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import TheLogo from '~/components/TheLogo/TheLogo.vue'

describe('toggleColorMode component', () => {
  it('should render component', () => {
    const wrapper = shallowMount(TheLogo)

    expect(wrapper.findComponent('[data-test="logo"]').attributes('to')).toBe('/')
  })
})
