import clsx from 'clsx'
import React from 'react'

import { CardColor, CardProvider, CardStyles } from './CardContext'

type ReactDivProps = React.HTMLAttributes<HTMLDivElement>
type Ref = HTMLDivElement

export type CardProps = {
  color?: CardColor
  isLoading?: boolean
  isStatic?: boolean
}

export const Card = React.forwardRef<Ref, ReactDivProps & CardProps>(
  (props, ref) => {
    const {
      children,
      className,
      color = 'default',
      isLoading = false,
      isStatic = false,
      ...rest
    } = props

    const cls = clsx(
      className,
      CardStyles.base,
      !isStatic && CardStyles.hov,
      CardStyles.color[color],
    )

    const cardValue = React.useMemo(() => {
      return { color, isLoading }
    }, [color, isLoading])

    return (
      <CardProvider value={cardValue}>
        <div ref={ref} className={cls} {...rest}>
          {children}
        </div>
      </CardProvider>
    )
  },
)

Card.displayName = 'Card'
