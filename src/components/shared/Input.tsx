import clsx from 'clsx'
import * as React from 'react'

// class="
export const InputStyles = {
  base: `
  block w-full text-sm leading-5 text-black focus:outline-none dark:text-gray-300 form-input focus:border-purple-400 dark:border-gray-600 dark:bg-gray-700 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray`,

  disabled: `bg-gray-300 opacity-50 cursor-not-allowed dark:bg-gray-800`,
  invalid: `border-red-600 dark:bg-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:shadow-outline-red dark:focus:shadow-outline-red`,

  /* Wrapper input if have left or right element */
  wrapper: `flex relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400`,

  addon: {
    left: {
      base: `absolute inset-y-0`,
      element: {
        icon: `flex items-center ml-3 pointer-events-none`,
        button: `absolute inset-y-0 px-4 text-sm rounded-l-md`,
      },
    },
    right: {
      base: `absolute inset-y-0 right-0`,
      element: {
        icon: ` flex items-center mr-3 pointer-events-none`,
        button: `px-4 text-sm rounded-r-md`,
      },
    },
  },
}

//"

type ReactInputProps = React.InputHTMLAttributes<HTMLInputElement>
type Ref = HTMLInputElement

export type InputProps = {
  isDisabled?: boolean
  isValid?: boolean
  isBlock?: boolean
  hasLeft?: boolean
  hasRight?: boolean
}

export const Input = React.forwardRef<Ref, ReactInputProps & InputProps>(
  (props, ref) => {
    const {
      children,
      className,
      isBlock,
      isDisabled,
      isValid = true,
      hasLeft,
      hasRight,
      ...rest
    } = props

    const cls = clsx(
      className,
      InputStyles.base,
      isBlock && 'w-full',
      isDisabled && InputStyles.disabled,
      !isValid && InputStyles.invalid,
      hasLeft && `pl-10`,
      hasRight && `pr-10`
    )

    return <input ref={ref} className={cls} {...rest} type="text" />
  }
)

Input.displayName = 'Input'

type ReactDivProps = Omit<React.HTMLAttributes<HTMLDivElement>, ''>

type InputAddonPosition = keyof typeof InputStyles['addon']
type InputAddonElement = keyof typeof InputStyles['addon']['left']['element']

type InputAddonProps = {
  position?: InputAddonPosition
  element?: InputAddonElement
}

export const InputAddon = React.forwardRef<
  HTMLDivElement,
  ReactDivProps & InputAddonProps
>((props, ref) => {
  const { children, className, position = 'left', element = 'icon' } = props

  const addonStyles = InputStyles.addon[position]

  const cls = clsx(
    className,
    addonStyles.base,
    element === 'button' && addonStyles.element.button,
    element === 'icon' && addonStyles.element.icon
  )

  return (
    <div ref={ref} className={cls}>
      {children}
    </div>
  )
})

InputAddon.displayName = 'InputAddon'

interface InputGroupProps {}

export const InputGroup: React.FC<InputGroupProps> = (props) => {
  const { children } = props

  const wrapperCls = clsx(InputStyles.wrapper)

  return <div className={wrapperCls}>{children}</div>
}
