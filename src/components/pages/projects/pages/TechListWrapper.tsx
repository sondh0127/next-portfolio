import * as React from 'react'

interface TechListWrapperProps {
  title: string
  className?: string
}

export const TechListWrapper: React.FC<TechListWrapperProps> = (props) => {
  const { children, title, className } = props
  return (
    <div className={`flex flex-wrap items-center space-y-1 ${className}`}>
      <div
        className={`mr-2 text-sm font-semibold text-gray-700 dark:text-gray-50`}
      >
        {title}:
      </div>
      {children}
    </div>
  )
}

export default TechListWrapper
