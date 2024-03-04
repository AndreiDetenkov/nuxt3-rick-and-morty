import { describe, expect, it } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import CloseButton from '@/components/CloseButton.vue'

describe('closeButton', () => {
  it('should render correctly', () => {
    const wrapper = shallowMount(CloseButton)

    expect(wrapper.find('[data-test="close-button"]').exists()).toBe(true)
  })

  it('should emit event when clicked', async () => {
    const wrapper = shallowMount(CloseButton)

    await wrapper.find('[data-test="close-button"]').trigger('click')

    expect(wrapper.emitted('onClick')).toBeTruthy()
    expect(wrapper.emitted('onClick')).toHaveLength(1)
  })
})
