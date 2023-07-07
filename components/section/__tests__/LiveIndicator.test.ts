import { describe, it } from 'vitest'
import { mount } from '@vue/test-utils'
import LiveIndicator from '../LiveIndicator.vue'

const factory = (args: any) => {
  return mount(LiveIndicator, { ...args })
}

describe('LiveIndicator', () => {
  it('should render live indicator', () => {
    const wrapper = factory()
  })
})
