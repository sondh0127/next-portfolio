/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require('tailwindcss/defaultTheme')
const { resolveConfig } = require('@retail-ui/core')

module.exports = resolveConfig({
  purge: ['{src}/**/*.{js,jsx,ts,tsx}'],
  experimental: 'all',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [],
})
