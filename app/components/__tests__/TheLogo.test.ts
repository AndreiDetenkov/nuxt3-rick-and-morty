import { shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import TheLogo from '~/components/Base/Logo.vue'

describe('toggleColorMode component', () => {
  it('should render component', () => {
    const wrapper = shallowMount(TheLogo)

    expect(wrapper.findComponent('[data-test="logo"]').attributes('to')).toBe('/')
  })
})
