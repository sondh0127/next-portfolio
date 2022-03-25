import { Spinner } from './Spinner'
import { cloneElement } from '@/utils'
import clsx from 'clsx'
import * as React from 'react'

export const ButtonIconStyles = {
  base: `inline-flex items-center justify-center leading-5 align-bottom transition-colors duration-150 ease-in transform scale-100 border cursor-pointer focus:outline-none dark:focus:shadow-outline-gray active:scale-95 overflow-hidden no-underline select-none`,
  disabled: `opacity-25 pointer-events-none cursor-default`,
  loading: `opacity-75 pointer-events-none cursor-default`,
  size: {
    xs: `p-0 rounded-sm`,
    sm: `p-1 rounded-md`,
    base: `p-2 rounded-lg`,
    lg: `p-3 rounded-lg`,
    xl: `p-4 rounded-lg`,
  },
  variant: {
    default: {
      primary: `text-white bg-purple-600 border-transparent active:shadow-outline-purple focus:bg-purple-700 hover:bg-purple-700`,
      secondary: `text-white bg-gray-600 border-gray-600 active:shadow-outline-gray focus:bg-gray-700 hover:bg-gray-700`,
      success: `text-white bg-green-600 border-green-600 active:shadow-outline-green focus:bg-green-700 hover:bg-green-700`,
      danger: `text-white bg-red-600 border-red-600 active:shadow-outline-red focus:bg-red-700 hover:bg-red-700`,
      warning: `text-white bg-yellow-500 border-yellow-500 active:shadow-outline-red focus:bg-yellow-600 hover:bg-yellow-600`,
      light: `text-gray-900 bg-gray-200 border-gray-200 active:shadow-outline-red focus:bg-gray-400 hover:bg-gray-400`,
      dark: `text-white bg-gray-900 border-gray-900 active:shadow-outline-red focus:bg-gray-600 hover:bg-gray-600`,
      link: `text-purple-800 border border-transparent dark:text-gray-400 active:bg-transparent hover:bg-gray-100 dark:hover:bg-gray-500 dark:hover:text-gray-300 dark:hover:bg-opacity-0`,
    },
    outline: {
      primary: `text-purple-700 bg-transparent border-current hover:text-white hover:bg-purple-700 hover:border-purple-700`,
      secondary: `text-gray-600 bg-transparent border-current hover:text-white hover:bg-gray-800 hover:border-gray-800`,
      success: `text-green-700 bg-transparent border-current hover:text-white hover:bg-green-700 hover:border-green-700`,
      danger: `text-red-700 bg-transparent border-current hover:text-white hover:bg-red-700 hover:border-red-700`,
      warning: `text-yellow-600 bg-transparent border-current hover:text-white hover:bg-yellow-600 hover:border-yellow-600`,
      link: `text-purple-800 bg-transparent border-transparent hover:border-gray-300`,
      light: `text-gray-600 bg-transparent border-current hover:text-gray-900 hover:bg-gray-400 hover:border-gray-400`,
      dark: `text-gray-900 bg-transparent border-current hover:text-white hover:bg-gray-900 hover:border-gray-900`,
    },
    light: {
      primary: `text-purple-700 bg-purple-200 border-purple-200 hover:bg-purple-300 hover:text-purple-700 hover:border-purple-300`,
      secondary: `text-gray-700 bg-gray-200 border-gray-200 hover:text-gray-900 hover:bg-gray-300 hover:border-gray-300`,
      success: `text-green-800 bg-green-200 border-green-200 hover:text-green-900 hover:bg-green-300 hover:border-green-300`,
      danger: `text-red-700 bg-red-200 border-red-200 hover:text-red-900 hover:bg-red-300 hover:border-red-300`,
      warning: `text-yellow-800 bg-yellow-200 border-yellow-200 hover:text-yellow-900 hover:bg-yellow-300 hover:border-yellow-300`,
      light: `text-purple-500 bg-transparent border-transparent hover:text-purple-700 hover:bg-gray-100 hover:border-gray-200`,
      dark: ``,
      link: ``,
    },
  },
  shape: {
    rounded: `rounded-full`,
    square: `rounded-none`,
  },
  spinner: {
    size: {
      xs: `w-4 h-4`,
      sm: `w-4 h-4`,
      base: `w-5 h-5`,
      lg: `w-6 h-6`,
      xl: `w-6 h-6`,
    },
  },
  // Icon size base on button
  icon: {
    size: {
      xs: `!h-4 !w-4`,
      sm: `!h-4 !w-4`,
      base: `!h-4 !w-4`,
      lg: `!h-6 !w-6`,
      xl: `!h-8 !w-8`,
    },
  },
}

type Ref = HTMLButtonElement
type ReactButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'disabled'
>

type ButtonIconColor = keyof typeof ButtonIconStyles['variant']['default']
type ButtonIconVariant = keyof typeof ButtonIconStyles['variant']
type ButtonIconSize = keyof typeof ButtonIconStyles['size']
type ButtonIconShape = keyof typeof ButtonIconStyles['shape']

export type ButtonIconProps = {
  size?: ButtonIconSize
  variant?: ButtonIconVariant
  shape?: ButtonIconShape
  color?: ButtonIconColor
  spinnerClassName?: string
  icon: React.ReactNode
  isLoading?: boolean
  isDisabled?: boolean
}

export const ButtonIcon = React.forwardRef<
  Ref,
  ReactButtonProps & ButtonIconProps
>((props, ref) => {
  const {
    className,
    spinnerClassName,
    isDisabled,
    isLoading,
    variant = 'default',
    color = 'primary',
    size = 'base',
    icon,
    shape,
    onClick,
    ...rest
  } = props

  const variantCls = ButtonIconStyles.variant

  const colorCls = variantCls[variant]
  const sizeCls = ButtonIconStyles.size
  const shapeCls = ButtonIconStyles.shape

  const cls = clsx(
    className,
    ButtonIconStyles.base,
    isDisabled && ButtonIconStyles.disabled,
    isLoading && ButtonIconStyles.loading,
    colorCls[color],
    sizeCls[size],
    shape && shapeCls[shape],
  )

  const spinnerSizeCls = ButtonIconStyles.spinner.size
  const spinnerCls = clsx('absolute', spinnerSizeCls[size], spinnerClassName)
  const isLoadingCls = isLoading ? 'opacity-0' : 'opacity-100'

  /* Icons */
  const iconSizeCls = ButtonIconStyles.icon.size
  const iconCls = clsx(iconSizeCls[size], isLoadingCls)

  const iconNode = cloneElement(icon, { className: iconCls })

  return (
    <button
      ref={ref}
      className={cls}
      disabled={isDisabled}
      onClick={onClick}
      {...rest}
    >
      {isLoading && <Spinner className={spinnerCls} />}
      {iconNode}
    </button>
  )
})

ButtonIcon.displayName = 'ButtonIcon'
