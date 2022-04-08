import { cx } from '@/lib'
import Link from 'next/link'
import { getDefaultLayout } from '@/layouts/DefaultLayout'
import { NextPageWithLayout } from '@/types'
import { Heading1, Heading2, Heading3 } from '@/components/shared'

const IndexPage: NextPageWithLayout = () => {
  return (
    <div>
      <div
        className={`mx-auto mt-4 mb-12 sm:max-w-md md:max-w-2xl lg:max-w-4xl`}
      >
        <div className="px-3 py-2 text-center">
          <Heading1 className={cx('p-2')}>Personal Portfolio</Heading1>
          <Heading2 className={cx('p-2')}>by Son Hong Do</Heading2>
          <Heading3 className={cx('p-2')}>@sondh0127</Heading3>
        </div>
        <article className={`mx-auto mt-5 prose text-center flex flex-col`}>
          <Link href="/about">
            <span className={`dark:text-gray-100 cursor-pointer`}>
              Who I am?
            </span>
          </Link>
          <Link href="/projects">
            <span className={`dark:text-gray-100 cursor-pointer`}>
              Check my works !
            </span>
          </Link>
          <Link href="/educations">
            <span className={`dark:text-gray-100 cursor-pointer`}>
              My educations !
            </span>
          </Link>
        </article>
      </div>
    </div>
  )
}

IndexPage.getLayout = getDefaultLayout('Home | @sondh0127')

export default IndexPage
