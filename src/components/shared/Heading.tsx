import { cx } from '@/lib'

interface HeadingProps {
  className?: string
  children?: React.ReactNode
}

export const Heading1 = ({ className, children }: HeadingProps) => {
  return (
    <h1
      className={cx(
        'text-5xl font-bold text-center text-transparent',
        'bg-clip-text caret-pink-600 bg-gradient-to-r',
        'from-rose-600 via-purple-700 to-violet-800',
        className,
      )}
    >
      {children}
    </h1>
  )
}

export const Heading2 = ({ className, children }: HeadingProps) => {
  return (
    <h2
      className={cx(
        'text-4xl font-bold text-center text-transparent',
        'bg-clip-text caret-pink-600 bg-gradient-to-r',
        'from-rose-600 via-purple-700 to-violet-800',
        className,
      )}
    >
      {children}
    </h2>
  )
}

export const Heading3 = ({ className, children }: HeadingProps) => {
  return (
    <h2
      className={cx(
        'text-3xl font-bold text-center text-transparent',
        'bg-clip-text caret-pink-600 bg-gradient-to-r',
        'from-rose-600 via-purple-700 to-violet-800',
        className,
      )}
    >
      {children}
    </h2>
  )
}
