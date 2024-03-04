import { describe, expect, it } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import List from '~/components/Character/Info/List.vue'

describe('character info list component', () => {
  const testProp = {
    status: 'Alive',
    species: 'Human',
    type: 'Unknown',
    gender: 'Male',
  }

  it('should render list', () => {
    const wrapper = shallowMount(List, {
      props: {
        list: testProp,
      },
    })

    expect(wrapper.find('ul').exists()).toBe(true)
    expect(wrapper.findAll('li').length).toBe(Object.keys(testProp).length)
  })
})
