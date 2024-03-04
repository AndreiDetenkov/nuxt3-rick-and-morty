import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import TheFooter from '~/components/TheFooter.vue'

describe('theFooter component', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = shallowMount(TheFooter)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('should render component', () => {
    expect(wrapper.find('[data-test="footer"]').exists()).toBe(true)
  })

  it('should render footer links', () => {
    expect(wrapper.findAll('nuxt-link-stub').length).toBe(3)
  })

  it.each([
    { id: 'github-link', link: 'https://github.com/afuh/rick-and-morty-api' },
    { id: 'twitter-link', link: 'https://twitter.com/rickandmortyapi' },
    { id: 'support-link', link: 'https://rickandmortyapi.com/support-us' },
  ])(`should render $id with correct link`, ({ id, link }) => {
    expect(wrapper.find(`[data-test="${id}"]`).attributes('to')).toEqual(link)
  })
})
