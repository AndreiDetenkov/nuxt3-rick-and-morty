import type { DOMWrapper, VueWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import Footer from '~/components/base/Footer.vue'

vi.mock('assets/icons/currency.svg', () => ({
  default: {
    template: '<div class="mock-currency-icon" />',
  },
}))

vi.mock('assets/icons/github.svg', () => ({
  default: {
    template: '<div class="mock-github-icon" />',
  },
}))

vi.mock('assets/icons/twitter.svg', () => ({
  default: {
    template: '<div class="mock-twitter-icon" />',
  },
}))

describe('footer', () => {
  let wrapper: VueWrapper

  beforeEach(() => {
    wrapper = mount(Footer, {
      global: {
        stubs: {
          'base-container': {
            template: '<div><slot /></div>',
          },
          'nuxt-link': {
            template: '<a :href="$attrs.to" :target="$attrs.target"><slot /></a>',
          },
        },
      },
    })
  })

  it('renders the footer element', () => {
    expect(wrapper.find('[data-test="footer"]').exists()).toBe(true)
  })

  it('renders all navigation items', () => {
    const links = wrapper.findAll('a')
    expect(links).toHaveLength(3)
  })

  it('renders the correct links with proper attributes', async () => {
    const links: DOMWrapper<HTMLAnchorElement>[] = wrapper.findAll('a')

    const expectedLinks = [
      {
        href: 'https://github.com/afuh/rick-and-morty-api',
        testId: 'github-link',
      },
      {
        href: 'https://twitter.com/rickandmortyapi',
        testId: 'twitter-link',
      },
      {
        href: 'https://rickandmortyapi.com/support-us',
        testId: 'support-link',
      },
    ] as const

    expectedLinks.forEach((expected, index) => {
      const link: DOMWrapper<HTMLAnchorElement> = links[index]!
      expect(link.attributes('href')).toBe(expected.href)
      expect(link.attributes('target')).toBe('_blank')
      expect(link.attributes('data-test')).toBe(expected.testId)
    })
  })
})
