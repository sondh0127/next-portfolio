import { cx } from '@/lib'
import * as React from 'react'

interface TechItemProps {
  tech: {
    name: string
    website: string
    logo: string
  }
}

export const TechItem: React.FC<TechItemProps> = (props) => {
  const { tech } = props
  return (
    <a
      className={`inline-flex items-center mr-2 space-x-1`}
      href={tech.website}
      target="__blank"
    >
      <img className={`w-5 h-5`} src={tech.logo} alt={tech.name} />
      <span
        className={cx(
          'text-xs font-medium text-gray-600 dark:hover:text-purple-400',
          'hover:text-purple-600 dark:text-gray-100',
        )}
      >
        {tech.name}
      </span>
    </a>
  )
}

export default TechItem
