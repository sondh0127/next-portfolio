import clsx from 'clsx'
import * as React from 'react'

import { useCardCtx, CardStyles } from './CardContext'

type ReactDivProps = React.HTMLAttributes<HTMLDivElement>
type Ref = HTMLDivElement

export type CardFooterProps = {
  isTransparent?: boolean
}

export const CardFooter = React.forwardRef<
  Ref,
  ReactDivProps & CardFooterProps
>((props, ref) => {
  const { children, className, isTransparent, ...rest } = props

  const { color, isLoading } = useCardCtx()

  const footerStyle = CardStyles.footer
  const cls = clsx(
    className,
    footerStyle.base,
    isTransparent && footerStyle.transparent,
    footerStyle.color[color],
    isLoading && footerStyle.loading
  )

  return (
    <div ref={ref} className={cls} {...rest}>
      {children}
    </div>
  )
})

CardFooter.displayName = 'CardFooter'
