import clsx from 'clsx'
import React from 'react'

type ReactInputProps = Pick<
  React.InputHTMLAttributes<HTMLInputElement>,
  'checked' | 'defaultChecked' | 'disabled' | 'id'
>

export type SwitchProps = ReactInputProps &
  React.PropsWithChildren<{
    onChange?: (checked: boolean) => void
  }>
type Ref = HTMLInputElement

const Switch = React.forwardRef<Ref, SwitchProps>((props, ref) => {
  const { onChange, checked, disabled, ...restProps } = props

  // class="
  const cls = clsx(
    'relative inline-block align-middle cursor-pointer select-none bg-transparent focus-within:shadow-outline',
  )
  // "

  // class="
  const trackCls = clsx(
    `w-12 h-6 bg-purple-600 dark:bg-gray-600 rounded-full shadow-inner`,
    checked && `transform transition-colors bg-green-500`,
    disabled && `bg-purple-500`,
  )
  // "

  // class="
  const thumbCls = clsx(
    'transition-all duration-300 ease-in-out absolute top-0 left-0 w-6 h-6 bg-white border-2 border-purple-600 rounded-full shadow',
    checked && `transform translate-x-full border-green-500`,
    disabled && `bg-purple-100 border-purple-500`,
  )
  // "

  return (
    // The label is required for the trick
    <label className={cls}>
      <input
        ref={ref}
        type="checkbox"
        className="hidden"
        onChange={(e) => {
          if (onChange) {
            onChange(e.target.checked)
          }
        }}
        {...restProps}
      />
      <div className={trackCls}></div>
      <div className={thumbCls}></div>
    </label>
  )
})

Switch.displayName = 'Switch'

export default Switch
