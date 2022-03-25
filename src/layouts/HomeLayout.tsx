import Head from 'next/head'
import React from 'react'

import { NextPageWithLayout } from '@/types'

import HeaderContent from './components/HeaderContent'
import RightBar from './components/RightBar'

type HomeLayoutProps = {
  title?: string
  children: React.ReactNode
}

/* -------------------------------- Component ------------------------------- */

const HomeLayout: React.FC<HomeLayoutProps> = (props) => {
  const { title, children } = props
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <React.Fragment>
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
              <div>{children}</div>
            </div>

            <div className={`hidden mr-2 lg:w-72 lg:block`}>
              <RightBar />
            </div>
          </main>

          {/* <Header /> */}
        </div>
      </div>
    </React.Fragment>
  )
}

export default HomeLayout

export const getHomeLayout = (title: string) => {
  const getLayout: NextPageWithLayout['getLayout'] = (page) => (
    <HomeLayout title={title}>{page}</HomeLayout>
  )
  return getLayout
}
