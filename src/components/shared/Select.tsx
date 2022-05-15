import { cxm, cx } from '@/lib'
import * as SelectPrimitive from '@radix-ui/react-select'
import { forwardRef } from 'react'
import IconChevronDown from '~icons/carbon/chevron-down.jsx'
import IconChevronUp from '~icons/carbon/chevron-up.jsx'
import IconCheckmark from '~icons/carbon/checkmark.jsx'

const groups = [
  {
    name: 'Fruits',
    options: [
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana' },
      { value: 'blueberry', label: 'Blueberry' },
      { value: 'grapes', label: 'Grapes' },
      { value: 'pineapple', label: 'Pineapple' },
    ],
  },
  {
    name: 'Vegetables',
    options: [
      { value: 'aubergine', label: 'Aubergine' },
      { value: 'broccoli', label: 'Broccoli' },
      { value: 'carrot', label: 'Carrot', disabled: true },
      { value: 'courgette', label: 'Courgette' },
      { value: 'leek', label: 'Leek' },
    ],
  },
  {
    name: 'Meat',
    options: [
      { value: 'beef', label: 'Beef' },
      { value: 'chicken', label: 'Chicken' },
      { value: 'lamb', label: 'Lamb' },
      { value: 'pork', label: 'Pork' },
    ],
  },
]

export const Select = forwardRef<
  React.ElementRef<typeof SelectPrimitive.SelectTrigger>,
  React.ComponentProps<typeof SelectPrimitive.SelectTrigger>
>((props, forwardedRef) => {
  const { className, ...rest } = props

  return (
    <SelectPrimitive.Root defaultValue="blueberry">
      <SelectPrimitive.SelectTrigger
        ref={forwardedRef}
        {...rest}
        className={cxm(
          'inline-flex items-center justify-center ',
          'rounded px-[15px] py-0 h-[35px] gap-[5px]',
          'text-[13px] leading-[1]',
          'bg-white text-purple-500 hover:bg-gray-100',
          'shadow-lg focus:shadow-2xl',
          className,
        )}
      >
        <SelectPrimitive.Value />
        <SelectPrimitive.Icon>
          <IconChevronDown />
        </SelectPrimitive.Icon>
      </SelectPrimitive.SelectTrigger>
      <SelectPrimitive.SelectContent
        className={cx(['overflow-hidden bg-white rounded-md shadow-2xl'])}
      >
        <SelectPrimitive.ScrollUpButton
          className={cx([
            'flex items-center justify-center h-[25px] bg-white text-purple-700 cursor-default',
          ])}
        >
          <IconChevronUp />
        </SelectPrimitive.ScrollUpButton>

        <SelectPrimitive.Viewport className="p-[6px]">
          {groups.map((group, index) => (
            <>
              <SelectPrimitive.Group key={index}>
                <SelectPrimitive.Label className="py-0 px-[25px] text-[12px] leading-[25px] text-gray-900">
                  {group.name}
                </SelectPrimitive.Label>

                {group.options.map((option, _index) => (
                  <SelectPrimitive.Item
                    key={_index}
                    value={option.value}
                    disabled={option.disabled}
                    className={cx([
                      'text-[13px] leading-[1]',
                      'rounded-[4px] relative flex items-center h-[25px] py-0 pl-[25px] pr-[35px]',
                      'select-none',
                      'text-purple-500 radix-disabled:text-gray-400',
                      'focus:bg-purple-600 focus:text-purple-100',
                    ])}
                  >
                    <SelectPrimitive.ItemText>
                      {option.label}
                    </SelectPrimitive.ItemText>
                    <SelectPrimitive.ItemIndicator
                      className={cx(
                        'absolute left-0 inline-flex items-center justify-center',
                        'w-[25px]',
                      )}
                    >
                      <IconCheckmark />
                    </SelectPrimitive.ItemIndicator>
                  </SelectPrimitive.Item>
                ))}
              </SelectPrimitive.Group>
              {index !== groups.length - 1 && (
                <SelectPrimitive.Separator className="h-[1px] bg-purple-500 m-[5px]"></SelectPrimitive.Separator>
              )}
            </>
          ))}
        </SelectPrimitive.Viewport>

        <SelectPrimitive.ScrollDownButton
          className={cx([
            'flex items-center justify-center h-[25px] bg-white text-purple-700 cursor-default',
          ])}
        >
          <IconChevronDown />
        </SelectPrimitive.ScrollDownButton>
      </SelectPrimitive.SelectContent>
    </SelectPrimitive.Root>
  )
})

Select.displayName = 'Select'
