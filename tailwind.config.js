const plugin = require('tailwindcss/plugin')

const dataAttributes = ['disabled']

const namedDataAttributes = {
  state: [
    'open',
    'closed',
    'active',
    'inactive',
    'on',
    'off',
    'checked',
    'unchecked',
    'instant-open',
    'delayed-open',
  ],
  side: ['top', 'bottom', 'left', 'right'],
  orientation: ['horizontal', 'vertical'],
  motion: ['from-start', 'to-start', 'from-end', 'to-end'],
  swipe: ['start', 'move', 'cancel', 'end'],
}

const radix = plugin.withOptions(
  (options) =>
    ({ addUtilities, addVariant, e }) => {
      options = options
        ? options
        : {
            variantPrefix: 'radix',
            skipAttributeNames: false,
          }

      if (
        options?.variantPrefix === '' &&
        options?.skipAttributeNames === true
      ) {
        throw new Error(
          'tailwindcss-radix: Cannot use empty `variantPrefix` while `skipAttributeNames` is enabled'
        )
      }

      const variantPrefix =
        options.variantPrefix === '' ? '' : `${options.variantPrefix}-`

      // Adds the following transform origin utilities
      // `--radix-dropdown-menu-content-transform-origin`,
      // `--radix-hover-card-content-transform-origin `,
      // `--radix-context-menu-content-transform-origin`,
      // `--radix-popover-content-transform-origin`,
      // `--radix-tooltip-content-transform-origin`,
      const transformOrigins = [
        'dropdown-menu',
        'hover-card',
        'context-menu',
        'popover',
        'tooltip',
      ]

      transformOrigins.forEach((transformOrigin) => {
        addUtilities({
          [`.origin-${variantPrefix}${transformOrigin}`]: {
            'transform-origin': `var(--radix-${transformOrigin}-content-transform-origin)`,
          },
        })
      })

      dataAttributes.forEach((attributeValue) => {
        let variantName = `${variantPrefix}${attributeValue}`
        let selector = `data-${attributeValue}`

        addVariant(`${variantName}`, ({ modifySelectors, separator }) => {
          modifySelectors(({ className }) => {
            return `.${e(
              `${variantName}${separator}${className}`
            )}[${selector}]`
          })
        })

        addVariant(`group-${variantName}`, ({ modifySelectors, separator }) => {
          modifySelectors(({ className }) => {
            return `.group[${selector}] .${e(
              `group-${variantName}${separator}${className}`
            )}`
          })
        })
      })

      Object.keys(namedDataAttributes).forEach((attributeName) => {
        namedDataAttributes[attributeName].forEach((attributeValue) => {
          let variantName = options.skipAttributeNames
            ? `${variantPrefix}${attributeValue}`
            : `${variantPrefix}${attributeName}-${attributeValue}`
          let selector = `data-${attributeName}="${attributeValue}"`

          addVariant(`${variantName}`, ({ modifySelectors, separator }) => {
            modifySelectors(({ className }) => {
              return `.${e(
                `${variantName}${separator}${className}`
              )}[${selector}]`
            })
          })

          addVariant(
            `group-${variantName}`,
            ({ modifySelectors, separator }) => {
              modifySelectors(({ className }) => {
                return `.group[${selector}] .${e(
                  `group-${variantName}${separator}${className}`
                )}`
              })
            }
          )
        })
      })

      // Adds the following [width|height] utilities
      // `--radix-accordion-content-[width|height]`,
      // `--radix-collapsible-content-[width|height]`,
      // `--radix-navigation-menu-viewport-[width|height]`,
      const dimensionAttributes = [
        'accordion-content',
        'collapsible-content',
        'navigation-menu-viewport',
      ]

      dimensionAttributes.forEach((component) => {
        addUtilities({
          [`.w-${variantPrefix}${component}`]: {
            width: `var(--radix-${component}-width)`,
          },
        })
        addUtilities({
          [`.h-${variantPrefix}${component}`]: {
            height: `var(--radix-${component}-height)`,
          },
        })
      })

      // Adds the following [x|y] utilities
      // `--radix-toast-swipe-move-[x|y]`,
      // `--radix-toast-swipe-end-[x|y]`,
      const tooltipAttributes = [
        'radix-toast-swipe-move',
        'radix-toast-swipe-end',
      ]

      tooltipAttributes.forEach((component) => {
        addUtilities({
          [`.${variantPrefix}${component}-x`]: {
            width: `var(--radix-${component}-x)`,
          },
        })
        addUtilities({
          [`.${variantPrefix}${component}-y`]: {
            height: `var(--radix-${component}-y)`,
          },
        })
      })
    }
)

const VIEWPORT_PADDING = 25

module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      display: [
        'Inter',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
    },
    extend: {
      boxShadow: {
        slider: '0 0 0 5px rgba(0, 0, 0, 0.3)',
        toast:
          'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
      },
      keyframes: {
        // Dropdown menu
        'scale-in': {
          '0%': { opacity: 0, transform: 'scale(0)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        'slide-down': {
          '0%': { opacity: 0, transform: 'translateY(-10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'slide-up': {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        // Tooltip
        'slide-up-fade': {
          '0%': { opacity: 0, transform: 'translateY(2px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'slide-right-fade': {
          '0%': { opacity: 0, transform: 'translateX(-2px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        'slide-down-fade': {
          '0%': { opacity: 0, transform: 'translateY(-2px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'slide-left-fade': {
          '0%': { opacity: 0, transform: 'translateX(2px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        // Toast
        hide: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        'slide-in': {
          from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
          to: { transform: 'translateX(0)' },
        },
        'swipe-out': {
          from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
          to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
        },
      },
      animation: {
        // Dropdown menu
        'scale-in': 'scale-in 0.2s ease-in-out',
        'slide-down': 'slide-down 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-up': 'slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        // Tooltip
        'slide-up-fade': 'slide-up-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-right-fade':
          'slide-right-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-down-fade': 'slide-down-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-left-fade': 'slide-left-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        // Toast
        // open
        'slide-in': 'slide-in 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        // closed
        hide: 'hide 100ms ease-in forwards',
        // end
        'swipe-out': '100ms ease-out forwards',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    radix,
  ],
}
