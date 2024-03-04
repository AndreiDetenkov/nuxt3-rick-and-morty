import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import Loading from '~/components/Loading.vue'

describe('loading component', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = shallowMount(Loading)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('should render component', () => {
    expect(wrapper.find('[data-test="loading"]').exists()).toBe(true)
  })

  it('should render loading text', () => {
    expect(wrapper.findAll('[data-test="loading-text"]').length).toBe('loading'.length)
  })
})
