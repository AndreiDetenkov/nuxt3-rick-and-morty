/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        black: '#202329',
        white: '#fff',
        'gray-lighten': '#9e9e9e',
        gray: '#3C3E44',
        'light-gray': '#f5f5f5',
        'dark-gray': '#333',
        'dark-gray-darker': '#272B33',
      },
    },
  },
  plugins: [],
}
