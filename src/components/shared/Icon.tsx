import clsx from 'clsx'
import React from 'react'

export const IconStyles = {
  size: {
    xs: `w-5 h-5`,
    sm: `w-6 h-6`,
    base: `w-7 h-7`,
    lg: `w-8 h-8`,
    xl: `w-9 h-9`,
  },
  color: {
    primary: ` text-purple-600`,
    secondary: ` text-gray-600`,
    success: ` text-green-600`,
    danger: ` text-red-600`,
    warning: ` text-yellow-500`,
    light: ` text-gray-200`,
    dark: ` text-gray-900`,
  },
}

export type ReactSVGProps = React.SVGProps<SVGSVGElement>
export type SVGRef = SVGSVGElement

type IconSize = keyof typeof IconStyles['size']
type IconColor = keyof typeof IconStyles['color']

export type IconProps = {
  size?: IconSize
  color?: IconColor
  isSolid?: boolean
}

export const Icon = React.forwardRef<SVGRef, ReactSVGProps & IconProps>(
  (props, ref) => {
    const {
      viewBox,
      isSolid = false,
      children,
      className,
      size = 'base',
      color,
      ...rest
    } = props

    const sizeCls = IconStyles.size
    const colorCls = IconStyles.color

    const cls = clsx(
      sizeCls[size],
      color ? colorCls[color] : 'text-current',
      isSolid ? 'fill-current' : 'stroke-current',
      className
    )

    return (
      <svg
        ref={ref}
        viewBox={viewBox}
        fill="none"
        className={cls}
        aria-hidden="true"
        {...rest}
      >
        {children}
      </svg>
    )
  }
)

Icon.displayName = 'Icon'
