import Link from 'next/link'
import * as React from 'react'

import MainInfoHeader from '@/components/MainInfoHeader'
import { getHomeLayout } from '@/layouts/HomeLayout'
import { NextPageWithLayout } from '@/types'

const IndexPage: NextPageWithLayout = () => {
  return (
    <div>
      <MainInfoHeader />
      <div
        className={`mx-auto mt-4 mb-12 sm:max-w-md md:max-w-2xl lg:max-w-4xl`}
      >
        <div className="px-3 py-2 text-center">
          <h1 className="text-5xl font-bold text-center text-purple-600">
            Blog by Son H.Do
          </h1>
          <h2 className={`mt-2 font-semibold text-purple-600`}>@sondh0127</h2>
        </div>
        <article className={`mt-5 prose text-center`}>
          <h2>
            <Link href="/about">
              <a className={`dark:text-gray-100`} href="/projects">
                Who I am?
              </a>
            </Link>
          </h2>
          <h2>
            <Link href="/projects">
              <a className={`dark:text-gray-100`} href="/projects">
                Check my works !
              </a>
            </Link>
          </h2>
          <h2>
            <Link href="/educations">
              <a className={`dark:text-gray-100`} href="/projects">
                My educations !
              </a>
            </Link>
          </h2>
        </article>
      </div>
    </div>
  )
}

IndexPage.getLayout = getHomeLayout('Home | @sondh0127')

export default IndexPage
