import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import LiveIndicator from '../LiveIndicator.vue'
import { StatusEnum } from '~/utils/types'

const factory = (args?: any) => {
  return shallowMount(LiveIndicator, { ...args })
}

describe('LiveIndicator', () => {
  it('should render live indicator with default color', () => {
    const wrapper = factory({ props: { status: '' } })
    expect(wrapper.classes()).toContain('bg-neutral-400')
    expect(wrapper.classes('bg-red-500')).toBe(false)
    expect(wrapper.classes('bg-green-500')).toBe(false)
  })

  it('should render live indicator with dead color', () => {
    const wrapper = factory({ props: { status: StatusEnum.Dead } })
    expect(wrapper.classes()).toContain('bg-red-500')
    expect(wrapper.classes('bg-green-500')).toBe(false)
    expect(wrapper.classes('bg-neutral-400')).toBe(false)
  })

  it('should render live indicator with live color', () => {
    const wrapper = factory({ props: { status: StatusEnum.Alive } })
    expect(wrapper.classes()).toContain('bg-green-500')
    expect(wrapper.classes('bg-red-500')).toBe(false)
    expect(wrapper.classes('bg-neutral-400')).toBe(false)
  })
})
