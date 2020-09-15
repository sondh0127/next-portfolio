import Link from 'next/link'
import * as React from 'react'

import { getHomeLayout } from '@/layouts/HomeLayout'
import { NextPageWithLayout } from '@/types'

const IndexPage: NextPageWithLayout = () => {
  return (
    <div className={`py-12`}>
      <div className="text-center">
        <h1 className="text-5xl text-center text-accent-1">
          Front End Blog by Son H. Do
        </h1>
        <h2>@sondh0127</h2>
      </div>
    </div>
  )
}

IndexPage.getLayout = getHomeLayout('Home | @sondh0127')

export default IndexPage
