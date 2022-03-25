import Link from 'next/link'
import { getDefaultLayout } from '@/layouts/DefaultLayout'
import { NextPageWithLayout } from '@/types'

const IndexPage: NextPageWithLayout = () => {
  return (
    <div>
      <div className={`mx-auto mt-4 mb-12 sm:max-w-md md:max-w-2xl lg:max-w-4xl`}>
        <div className="px-3 py-2 text-center">
          <h1 className="text-5xl font-bold text-center text-purple-600">
            Personal Portfolio by Son Hong Do
          </h1>
          <h2 className={`mt-2 font-semibold text-purple-600`}>@sondh0127</h2>
        </div>
        <article className={`mx-auto mt-5 prose text-center`}>
          <h2>
            <Link href="/about">
              <span className={`dark:text-gray-100`}>Who I am?</span>
            </Link>
          </h2>
          <h2>
            <Link href="/projects">
              <span className={`dark:text-gray-100`}>Check my works !</span>
            </Link>
          </h2>
          <h2>
            <Link href="/educations">
              <span className={`dark:text-gray-100`}>My educations !</span>
            </Link>
          </h2>
        </article>
      </div>
    </div>
  )
}

IndexPage.getLayout = getDefaultLayout('Home | @sondh0127')

export default IndexPage
