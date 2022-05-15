import { Icon, IconProps } from './Icon'
import clsx from 'clsx'
import React from 'react'

export const SpinnerStyles = {
  base: `animate-spin `,
  size: {
    sm: `!w-4 !h-4`,
    base: `!w-6 !h-6`,
    lg: `!w-9 !h-9`,
  },
  // when has Loading text inside button `-ml-1 mr-3`
}

type ReactSVGProps = React.SVGProps<SVGSVGElement>
type SVGRef = SVGSVGElement

type SpinnerSize = keyof typeof SpinnerStyles['size']

export type SpinnerProps = IconProps & {
  size?: SpinnerSize
}

export const Spinner = React.forwardRef<SVGRef, ReactSVGProps & SpinnerProps>(
  (props, ref) => {
    const { className, size = 'base' } = props

    const sizeCls = SpinnerStyles.size[size]

    const cls = clsx(SpinnerStyles.base, sizeCls, className)

    return (
      <Icon
        className={cls}
        role="status"
        aria-hidden="true"
        fill="none"
        viewBox="0 0 24 24"
        ref={ref}
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </Icon>
    )
  },
)

Spinner.displayName = 'Spinner'
