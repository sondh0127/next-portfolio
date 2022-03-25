import { cxm, cx } from '@/lib'
import * as ToastPrimitive from '@radix-ui/react-toast'
import React from 'react'
import { Button } from './Button'

const VIEWPORT_PADDING = 25

export const ToastProvider = ToastPrimitive.Provider

export const ToastViewport = () => (
  <ToastPrimitive.Viewport
    className={cx([
      'fixed bottom-0 right-0 flex flex-col p-[25px]',
      'gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647]',
    ])}
  />
)

export const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Root>,
  React.ComponentProps<typeof ToastPrimitive.Root>
>((props, forwardedRef) => {
  const { className, ...rest } = props
  const eventDateRef = React.useRef(new Date())

  return (
    <ToastPrimitive.Root
      {...rest}
      ref={forwardedRef}
      className={cxm(
        'bg-white rounded-md shadow-toast p-[15px] ',
        'grid grid-flow-col grid-cols-[auto,max-content] gap-x-[15px] items-center',
        'radix-state-open:animate-slide-in',
        'radix-state-closed:animate-hide',
        'radix-swipe-move:translate-x-[var(--radix-toast-swipe-move-x)]',
        'radix-swipe-cancel:translate-x-0 radix-swipe-cancel:duration-100 radix-swipe-cancel:ease-out',
        'radix-swipe-end:animate-swipe-out',
        className
      )}
    >
      <ToastPrimitive.Title className="mb-[5px] text-[15px] font-medium text-gray-800">
        Scheduled: Catch up
      </ToastPrimitive.Title>
      <ToastPrimitive.Description
        className="m-0 text-gray-600 text-[13px] leading-[1.3]"
        asChild
      >
        <time dateTime={eventDateRef.current.toISOString()}>
          {prettyDate(eventDateRef.current)}
        </time>
      </ToastPrimitive.Description>
      <ToastPrimitive.Action
        className="row-span-2"
        asChild
        altText="Goto schedule to undo"
      >
        <Button>Undo</Button>
      </ToastPrimitive.Action>
    </ToastPrimitive.Root>
  )
})

Toast.displayName = 'Toast'

function prettyDate(date: any) {
  return new Intl.DateTimeFormat('vi-VN', {
    dateStyle: 'short',
    timeStyle: 'short',
  }).format(date)
}
