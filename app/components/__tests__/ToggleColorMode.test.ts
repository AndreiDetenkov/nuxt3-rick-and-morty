import { enableAutoUnmount, mount } from '@vue/test-utils'
import { afterEach, describe, expect, it } from 'vitest'
import ToggleColorMode from '~/components/ToggleColorMode.client.vue'

function factory(args?: any) {
  return mount(ToggleColorMode, {
    ...args,
  })
}

enableAutoUnmount(afterEach)

describe('toggleColorMode component', () => {
  it('should render component', async () => {
    const wrapper = factory({
      props: {
        isDarkMode: true,
      },
    })
    expect(wrapper.find('[data-test="toggle-button"]').exists()).toBe(true)
  })

  it('should display icons depend on prop value', async () => {
    const wrapper = factory({
      props: {
        isDarkMode: true,
      },
    })
    expect(wrapper.find('[data-test="sun"]').exists()).toBe(true)

    await wrapper.setProps({ isDarkMode: false })
    expect(wrapper.find('[data-test="moon"]').exists()).toBe(true)
  })
})
