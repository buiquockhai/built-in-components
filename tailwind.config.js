const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/static/**/*.{js,ts,jsx,tsx}',
    './src/public/**/*.{js,ts,jsx,tsx}',
    './src/libs/**/*.{js,ts,jsx,tsx}',
    './src/utils/**/*.{ts,js}',
  ],
  plugins: [require('@tailwindcss/line-clamp')],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
        mono: ['var(--font-montserrat)', ...fontFamily.mono],
      },
      colors: {
        'dark-100': '#171717',
        'dark-200': '#151515',
        'dark-300': '#131313',
        'dark-400': '#111111',

        primary: '#3C50E0',
        secondary: '#80CAEE',
        stroke: '#E2E8F0',
      },
      animationPlayState: {
        paused: 'paused',
      },
      transitionProperty: {
        observer: 'transform,opacity',
      },
      backgroundImage: {
        'grid-pattern-dark': `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(226 232 240 / 0.08)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
        'grid-pattern-light': `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(15 23 42 / 0.08)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
      },
    },
  },
}
