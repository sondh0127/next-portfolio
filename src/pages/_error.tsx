import { NextPage } from 'next'
import Head from 'next/head'

import ErrorPage from '@/components/pages/error'

interface ErrorProps {
  statusCode?: number
}

const Error: NextPage<ErrorProps> = ({ statusCode }) => {
  return (
    <>
      <Head>
        <title>Error Page</title>
      </Head>
      <ErrorPage statusCode={statusCode} />
    </>
  )
}

Error.getInitialProps = async ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404

  return { statusCode }
}

export default Error
