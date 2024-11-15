import { shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Title from '~/components/character/info/Title.vue'

describe('character info title component', () => {
  it('should render the title', () => {
    const wrapper = shallowMount(Title, {
      props: {
        name: 'Test Title',
      },
    })

    expect(wrapper.find('[data-test="info-title"]').exists()).toBe(true)
    expect(wrapper.find('[data-test="info-title"]').text()).toBe('Test Title')
  })
})
