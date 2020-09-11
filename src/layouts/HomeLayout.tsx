import { Avatar, Button, Drawer, DrawerBody } from '@retail-ui/core'
import Head from 'next/head'
import React from 'react'

import ReactLogo from '@/components/icons/ReactLogo'
import { NextPageWithLayout } from '@/types'

import Header from './components/Header'
import HeaderContent from './components/HeaderContent'
import RightBar from './components/RightBar'

type HomeLayoutProps = {
  title?: string
  children: React.ReactNode
}

export const ROUTES = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/about',
    name: 'About',
  },
  {
    path: '/work',
    name: 'Work',
  },
  {
    path: '/education',
    name: 'Education',
  },
  {
    path: '/blog',
    name: 'Blog (WIP)',
  },
]

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
      <div className="flex min-h-screen bg-cool-gray-100 dark:bg-gray-800">
        <div className={`container flex justify-center mx-auto`}>
          <header className={`flex justify-end`}>
            <HeaderContent />
          </header>

          <main className={`flex justify-between flex-1 min-h-full `}>
            <div className={`flex flex-col flex-1 border-l border-r`}>
              <div className={``}>
                <div
                  className={`flex flex-col items-center py-6 border-b border-gray-300 sm:flex-row px-7`}
                >
                  <div className="relative flex-shrink-0 w-24 text-center no-underline rounded-full select-none sm:mr-6 md:w-32 md:h-32">
                    <img
                      alt="avatar"
                      className="object-cover w-full h-full bg-purple-300 rounded-full"
                      src="https://avatars3.githubusercontent.com/u/62163604?s=460&amp;u=2d0ed85df93a996e55f9f81034abd2975d2342d3&amp;v=4"
                      loading="lazy"
                    />
                  </div>
                  <div
                    className={`text-gray-800 border-b border-gray-100 dark:text-gray-100`}
                  >
                    <div
                      className={`flex flex-col items-center font-bold sm:flex-row`}
                    >
                      <span
                        className={`text-xl sm:mr-2`}
                        role="img"
                        aria-label="name"
                      >
                        Son Do Hong
                      </span>
                      <span className={`text-lg`} role="img" aria-label="name">
                        🎉 Looking for a job.
                      </span>
                    </div>
                    <div className={`mt-2 text-base font-medium`}>
                      <div>
                        <span role="img" aria-label="vietnam">
                          Hanoi / Vietnam 🇻🇳
                        </span>
                      </div>
                      <div>
                        <span role="img" aria-label="vietnam">
                          2020 🎓 New graduated
                        </span>
                      </div>
                      <div className={`flex flex-col sm:flex-row`}>
                        <div className={`sm:mr-2`}>Software engineer</div>
                        <div
                          className={`flex flex-row-reverse items-center sm:flex-row`}
                        >
                          <div
                            className={`sm:mr-2`}
                            style={{ color: '#61DAFB' }}
                          >
                            <ReactLogo className={`inline-block w-5 h-5`} />
                          </div>
                          <div className={`flex-1`}>Front-End developer</div>
                        </div>
                      </div>
                      <div className={`text-sm italic text-purple-600`}>
                        @sondh0127
                      </div>
                    </div>
                  </div>
                </div>
                <div>{children}</div>
              </div>
            </div>

            <div className={`flex-col hidden mr-2 bg-blue-200 lg:w-72 lg:flex`}>
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
