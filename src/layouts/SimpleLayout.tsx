import Head from 'next/head'

import { NextPageWithLayout } from '@/types'

import HeaderContent from './components/HeaderContent'
import RightBar from './components/RightBar'
import { Fragment, ReactNode } from 'react'
import MainInfoHeader from '@/components/MainInfoHeader'

interface SimpleLayoutProps {
  title?: string
  children: ReactNode
}

const SimpleLayout: React.FC<SimpleLayoutProps> = (props) => {
  const { title, children } = props

  return (
    <>
      <Head>
        <title>{title || "sondh0127's Blog"}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex min-h-screen bg-gray-100 dark:bg-gray-800">
        <div className={`container flex justify-center mx-auto`}>
          <header className={`flex justify-end`}>
            <HeaderContent />
          </header>

          <main className={`flex justify-between flex-1 min-h-full `}>
            <div className={`flex flex-col flex-1 border-l border-r`}>
              {children}
            </div>

            <div className={`hidden mr-2 lg:w-72 lg:block`}>
              <RightBar />
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default SimpleLayout

export const getSimpleLayout = (title: string) => {
  const getLayout: NextPageWithLayout['getLayout'] = (page) => (
    <SimpleLayout title={title}>{page}</SimpleLayout>
  )
  return getLayout
}
