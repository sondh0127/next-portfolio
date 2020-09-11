import * as React from 'react'

interface IndexPageProps {
  session: any
}

export const IndexPage: React.FC<IndexPageProps> = (props) => {
  const { children } = props
  return <div>IndexPage {children}</div>
}

export default IndexPage
