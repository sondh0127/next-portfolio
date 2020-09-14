import Head from 'next/head'
import React from 'react'
import { useWindowScroll } from 'react-use'

import { NextPageWithLayout } from '@/types'

import HeaderContent from './components/HeaderContent'
import MainInfo from './components/MainInfo'
import MainInfoSticky from './components/MainInfoSticky'
import RightBar from './components/RightBar'

type HomeLayoutProps = {
  title?: string
  children: React.ReactNode
}

/* -------------------------------- Constant -------------------------------- */
const HEIGHT_THRESHOLD = 70

/* -------------------------------- Component ------------------------------- */

const HomeLayout: React.FC<HomeLayoutProps> = (props) => {
  const { title, children } = props
  const [isOpen, setIsOpen] = React.useState(false)
  const [isSimple, setIsSimple] = React.useState(false)
  const scroll = useWindowScroll()
  React.useEffect(() => {
    setIsSimple(scroll.y > HEIGHT_THRESHOLD)
  }, [scroll])
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
              <div className={``}>
                <div
                  className={`${
                    !isSimple ? 'opacity-0 hidden' : 'opacity-100 z-10 block'
                  } sticky top-0 w-full transition duration-150`}
                >
                  <MainInfoSticky />
                </div>

                <div
                  className={`${
                    isSimple ? `opacity-0 max-h-0` : `opacity-100`
                  } transition duration-150 ease-in-out`}
                >
                  <MainInfo />
                </div>
                <div>{children}</div>
              </div>
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
