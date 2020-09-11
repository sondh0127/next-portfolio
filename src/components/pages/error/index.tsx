import * as React from 'react'

interface ErrorPageProps {
  statusCode?: number
}

export const ErrorPage: React.FC<ErrorPageProps> = (props) => {
  const { children, statusCode } = props
  return <div>ErrorPage {children}</div>
}

export default ErrorPage
