import { Spinner } from './Spinner'
import { cloneElement } from '@/utils'
import clsx from 'clsx'
import * as React from 'react'

export const ButtonStyles = {
  base: `inline-flex items-center justify-center leading-5 align-bottom transition-colors duration-150 ease-in transform scale-100 border cursor-pointer focus:outline-none dark:focus:shadow-outline-gray active:scale-95 overflow-hidden no-underline select-none`,
  disabled: `opacity-25 pointer-events-none cursor-default`,
  loading: `opacity-75 pointer-events-none cursor-default`,
  block: `w-full`,
  size: {
    xs: `py-0 px-2 text-xs rounded-md`,
    sm: `py-1 px-3 text-sm rounded-md`,
    base: `py-2 px-4 text-base font-medium rounded-lg`,
    lg: `py-3 px-5 text-lg rounded-lg`,
    xl: `py-4 px-6 text-xl rounded-lg`,
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
  // className="
  spinner: {
    size: {
      xs: `w-4 h-4`,
      sm: `w-4 h-4`,
      base: `w-5 h-5`,
      lg: `w-6 h-6`,
      xl: `w-6 h-6`,
    },
  },
  icon: {
    size: {
      xs: `!w-5 !h-5`,
      sm: `!w-6 !h-6`,
      base: `!w-7 !h-7`,
      lg: `!w-8 !h-8`,
      xl: `!w-9 !h-9`,
    },
    variant: {
      left: 'mr-2 -ml-1',
      right: 'ml-2 -mr-1',
    },
  },
}

type Ref = HTMLButtonElement
type ReactButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'disabled'
>

type ButtonColor = keyof typeof ButtonStyles['variant']['default']
type ButtonVariant = keyof typeof ButtonStyles['variant']
type ButtonSize = keyof typeof ButtonStyles['size']
type ButtonShape = keyof typeof ButtonStyles['shape']

export type ButtonProps = {
  size?: ButtonSize
  variant?: ButtonVariant
  shape?: ButtonShape
  color?: ButtonColor
  spinnerClassName?: string
  block?: boolean
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
  isLoading?: boolean
  isDisabled?: boolean
  isBlock?: boolean
}

export const Button = React.forwardRef<Ref, ReactButtonProps & ButtonProps>(
  (props, ref) => {
    const {
      children,
      className,
      spinnerClassName,
      isDisabled,
      isBlock,
      isLoading,
      variant = 'default',
      color = 'primary',
      size = 'base',
      iconLeft,
      iconRight,
      shape,
      onClick,
      ...rest
    } = props

    const variantCls = ButtonStyles.variant

    const colorCls = variantCls[variant]
    const sizeCls = ButtonStyles.size
    const shapeCls = ButtonStyles.shape

    const cls = clsx(
      className,
      ButtonStyles.base,
      isDisabled && ButtonStyles.disabled,
      isBlock && ButtonStyles.block,
      isLoading && ButtonStyles.loading,
      colorCls[color],
      sizeCls[size],
      shape && shapeCls[shape],
    )
    // Spinner
    const spinnerSizeCls = ButtonStyles.spinner.size
    const spinnerCls = clsx('absolute', spinnerSizeCls[size], spinnerClassName)
    const isLoadingCls = isLoading ? 'opacity-0' : 'opacity-100'

    /* iconCls */
    const iconCls = ButtonStyles.icon
    const iconSizeCls = iconCls['size']

    const iconLeftCls = clsx(
      children && iconCls.variant.left,
      isLoadingCls,
      iconSizeCls[size],
    )
    const iconRightCls = clsx(
      children && iconCls.variant.right,
      isLoadingCls,
      iconSizeCls[size],
    )

    const iconLeftNode = cloneElement(iconLeft, { className: iconLeftCls })
    const iconRightNode = cloneElement(iconRight, { className: iconRightCls })

    return (
      <button
        ref={ref}
        className={cls}
        disabled={isDisabled}
        onClick={onClick}
        {...rest}
      >
        {isLoading && <Spinner className={spinnerCls} />}
        {iconLeftNode}
        <span className={isLoading ? 'opacity-0' : 'opacity-100'}>
          {children}
        </span>
        {iconRightNode}
      </button>
    )
  },
)

Button.displayName = 'Button'
