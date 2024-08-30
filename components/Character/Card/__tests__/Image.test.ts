import { shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Image from '@/components/Character/Card/Image.vue'

const image = 'https://example.com/image.jpg'
const name = 'Example Name'

function factory(args?: any) {
  return shallowMount(Image, {
    props: { image, name },
    ...args,
  })
}

describe('image component', () => {
  it('should render image component', () => {
    const wrapper = factory()

    expect(wrapper.find('nuxt-img-stub').exists()).toBe(true)
  })

  it('renders props.image and props.name when passed', () => {
    const wrapper = factory()

    expect(wrapper.find('nuxt-img-stub').attributes('src')).toBe(image)
    expect(wrapper.find('nuxt-img-stub').attributes('alt')).toBe(name)
  })

  it('renders the correct image URL', () => {
    const wrapper = factory()

    expect(wrapper.find('nuxt-img-stub').attributes('src')).toBe(image)
  })

  it('renders the correct alt text', () => {
    const wrapper = factory()

    expect(wrapper.find('nuxt-img-stub').attributes('alt')).toBe(name)
  })
})
