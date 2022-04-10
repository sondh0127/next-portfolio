import * as React from 'react'

interface ErrorPageProps {
  statusCode?: number
  children?: React.ReactNode
}

export const ErrorPage: React.FC<ErrorPageProps> = (props) => {
  const { statusCode, children } = props
  return <div>ErrorPage {children}</div>
}

export default ErrorPage
