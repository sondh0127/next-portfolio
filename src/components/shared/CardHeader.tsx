import clsx from 'clsx'
import * as React from 'react'

import { useCardCtx, CardStyles } from './CardContext'

type ReactDivProps = React.HTMLAttributes<HTMLDivElement>
type Ref = HTMLDivElement

export type CardHeaderProps = {
  title?: string
  subtitle?: string
  action?: React.ReactNode
}

export const CardHeader = React.forwardRef<
  Ref,
  ReactDivProps & CardHeaderProps
>((props, ref) => {
  const { children, className, title, subtitle, action, ...rest } = props

  const { color } = useCardCtx()

  const headerStyle = CardStyles.header

  const cls = clsx(className, headerStyle.base, headerStyle.color[color])

  let titleRender
  if (title) {
    const titleStyle = headerStyle.title
    const titleCls = clsx(titleStyle.base, titleStyle[color])

    if (subtitle) {
      const subtitleCls = headerStyle.subtitle
      titleRender = (
        <div>
          <div className={titleCls}>{title}</div>
          <div className={subtitleCls}>{subtitle}</div>
        </div>
      )
    } else {
      titleRender = <div className={titleCls}>{title}</div>
    }
  } else {
    titleRender = children
  }

  return (
    <div ref={ref} className={cls} {...rest}>
      {titleRender}
      {action}
    </div>
  )
})

CardHeader.displayName = 'CardHeader'
