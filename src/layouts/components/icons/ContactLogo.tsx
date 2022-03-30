import { cx } from '@/lib'
import * as React from 'react'

interface ContactLogoProps {
  href: string
  color: string
}

export const ContactLogo: React.FC<ContactLogoProps> = (props) => {
  const { children, color, href } = props

  const childrenCls = cx(`fill-current w-7 h-7`)

  const childrenRender = React.isValidElement(children)
    ? React.cloneElement(children, { className: childrenCls })
    : null
  return (
    <a href={href} target="_blank" rel="noreferrer" style={{ color }}>
      <div
        className={cx(
          'flex items-center justify-center p-2 transition duration-150',
          'ease-in rounded-full w-max-content hover:bg-purple-200'
        )}
      >
        {childrenRender}
      </div>
    </a>
  )
}

export default ContactLogo
