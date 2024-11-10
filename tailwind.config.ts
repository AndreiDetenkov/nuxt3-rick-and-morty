import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  darkMode: 'class',
  content: [
    './app/components/**/*.vue',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/app.vue',
    './app/error.vue',
  ],
  theme: {
    extend: {
      colors: {
        'title': '#202329',
        'primary': '#3C3E44',
        'primary-light': '#9e9e9e',
        'primary-lighter': '#f5f5f5',
        'primary-dark': '#333',
        'primary-darker': '#272B33',
      },
    },
  },
  plugins: [],
}
