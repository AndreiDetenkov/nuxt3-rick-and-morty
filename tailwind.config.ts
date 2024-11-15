import animate from 'tailwindcss-animate'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    '~~/app/components/**/*.vue',
    '~~/app/layouts/**/*.vue',
    '~~/app/pages/**/*.vue',
    '~~/app/app.vue',
    '~~/app/error.vue',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        'title': '#202329',
        'primary': '#3C3E44',
        'primary-light': '#9e9e9e',
        'primary-lighter': '#f5f5f5',
        'primary-dark': '#333',
        'primary-darker': '#272B33',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [animate],
}
