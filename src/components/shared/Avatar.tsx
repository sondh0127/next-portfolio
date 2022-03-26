import { cloneElement } from '@/utils'
import clsx from 'clsx'
import React from 'react'

export const AvatarStyles = {
  base: `relative rounded-full select-none text-center no-underline`,
  avatarIcon: `bg-purple-300 text-purple-600 `,
  size: {
    xs: `w-6 h-6`,
    sm: `w-8 h-8`,
    base: `h-10 w-10 `,
    lg: `w-20 h-20`,
    xl: `w-32 h-32`,
  },
  image: {
    base: `h-full w-full object-cover rounded-full bg-purple-300`,
  },
  icon: {
    size: {
      xs: `!w-3 !h-full mx-auto`,
      sm: `!w-4 !h-full mx-auto`,
      base: `!w-6 !h-full mx-auto`,
      lg: `!w-10 !h-full mx-auto`,
      xl: `!w-16 !h-full mx-auto`,
    },
  },
  title: {
    base: `absolute rounded-full inset-0 font-bold uppercase flex items-center justify-center h-full w-full bg-purple-300 text-purple-600 no-underline`,
    size: {
      xs: `text-xs`,
      sm: `text-sm`,
      base: `text-base`,
      lg: `text-lg`,
      xl: `text-xl`,
    },
  },
  group: {
    base: `flex -space-x-4`,
  },
}

type ReactDivProps = React.HTMLAttributes<HTMLDivElement>
type Ref = HTMLDivElement

type AvatarSize = keyof typeof AvatarStyles['size']
// type AvatarStatus = keyof Theme['Avatar']['status']

export type AvatarProps = {
  size?: AvatarSize
  // shape:
  // image
  alt?: string
  src?: string
  // text
  title?: string
  // icon
  icon?: React.ReactNode
  // status: AvatarStatus
}

export const Avatar = React.forwardRef<Ref, ReactDivProps & AvatarProps>(
  (props, ref) => {
    const { size = 'base', className, alt, src, title, icon, ...rest } = props

    const sizeCls = AvatarStyles.size

    const cls = clsx(
      className,
      AvatarStyles.base,
      sizeCls[size],
      icon && AvatarStyles.avatarIcon
    )

    let childrenToRender // priority image => icon => text
    if (src) {
      const imgCls = clsx(AvatarStyles.image.base)
      childrenToRender = (
        <img className={imgCls} src={src} alt={alt} loading="lazy" />
      )
    } else if (icon) {
      const iconSizeCls = AvatarStyles.icon.size
      childrenToRender = cloneElement(icon, { className: iconSizeCls })
    } else {
      // title
      const titleSizeCls = AvatarStyles.title.size
      const titleCls = clsx(AvatarStyles.title.base, titleSizeCls[size])
      childrenToRender = <span className={titleCls}>{title}</span>
    }

    return (
      <div ref={ref} className={cls} {...rest}>
        {childrenToRender}
        {/* Some shadow */}
        <div
          className="absolute inset-0 rounded-full shadow-inner"
          aria-hidden="true"
        ></div>
      </div>
    )
  }
)

Avatar.displayName = 'Avatar'

export type AvatarGroupProps = {
  // maxCount: number
}

export const AvatarGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & AvatarGroupProps
>((props, ref) => {
  const { children, ...rest } = props
  const cls = clsx(AvatarStyles.group.base)
  return (
    <div ref={ref} className={cls} {...rest}>
      {children}
    </div>
  )
})

AvatarGroup.displayName = 'AvatarGroup'
