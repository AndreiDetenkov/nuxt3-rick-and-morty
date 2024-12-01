import { shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import List from '~/components/character/info/List.vue'

describe('character Info List component', () => {
  const defaultProps = {
    status: 'Alive',
    species: 'Human',
    type: 'Unknown',
    gender: 'Male',
  }

  it('should render all character info items', () => {
    const wrapper = shallowMount(List, {
      props: defaultProps,
    })

    const listItems = wrapper.findAll('li')
    expect(listItems).toHaveLength(4)

    expect(listItems[0]?.text()).toContain(`Status: ${defaultProps.status}`)
    expect(listItems[1]?.text()).toContain(`Species: ${defaultProps.species}`)
    expect(listItems[2]?.text()).toContain(`Type: ${defaultProps.type}`)
    expect(listItems[3]?.text()).toContain(`Gender: ${defaultProps.gender}`)
  })

  it('should render empty type when type is empty string', () => {
    const wrapper = shallowMount(List, {
      props: {
        ...defaultProps,
        type: '',
      },
    })

    const typeItem = wrapper.findAll('li')[2]
    expect(typeItem?.text()).toContain('Type:')
  })
})
