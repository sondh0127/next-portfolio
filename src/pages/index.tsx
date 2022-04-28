import { cx } from '@/lib'
import Link from 'next/link'
import { NextPageWithLayout } from '@/types'
import { Heading1, Heading3 } from '@/components/shared'
import { getSimpleLayout } from '@/layouts/SimpleLayout'
import IconReact from '~icons/logos/react.jsx'
import IconVue from '~icons/logos/vue.jsx'
import IconSvelte from '~icons/logos/svelte-icon.jsx'
import { srcAvatar } from 'utils'

const IndexPage: NextPageWithLayout = () => {
  return (
    <div className={cx('', '')}>
      <div className="px-3 py-2 text-center border-b border-gray-300">
        <Heading1 className={cx('p-2')}>Personal Portfolio</Heading1>
        <Heading3 className={cx('p-2')}>by @sondh0127</Heading3>
      </div>
      <div
        className={cx(
          'grid grid-cols-[1fr,2fr,2fr] items-center py-6 border-b border-gray-300',
          'px-7 sm:flex-row text-gray-600 dark:text-gray-100',
        )}
      >
        <div
          className={cx(
            'relative flex-shrink-0 w-24 text-center no-underline rounded-full',
            'select-none md:w-32 sm:mr-6',
          )}
        >
          <img
            alt="avatar"
            className="object-cover w-full h-full bg-purple-300 rounded-full"
            src={srcAvatar}
            loading="lazy"
          />
        </div>
        {/*  */}
        <div>
          <div className={`flex flex-col items-center font-bold sm:flex-row`}>
            <span className={`text-xl sm:mr-2`} role="img" aria-label="name">
              Son Hong Do
            </span>
          </div>
          <div className={`text-lg font-medium`} role="img" aria-label="name">
            🎉 Available for hire.
          </div>
          <div>Hanoi, Vietnam 🇻🇳</div>
          <div className={`text-sm italic text-purple-600`}>
            <a
              href="https://github.com/sondh0127"
              target="_blank"
              rel="noreferrer"
            >
              @sondh0127
            </a>
          </div>
        </div>
        {/*  */}
        <div className={`mt-1 text-base font-medium`}>
          <div className={`flex items-center justify-center space-x-2`}>
            Passion in <IconVue className={`inline-block w-4 h-4`} />
            <div className={'font-medium'}>Software Engineer</div>
            Live with <IconReact className={`inline-block w-4 h-4`} />
            <div className={`font-medium`}>Front-end developer</div>
            Crush on <IconSvelte className={`inline-block w-4 h-4`} />
          </div>
          <div>
            <span role="img" aria-label="graduated">
              Middle level - 3+ years of experience
            </span>
          </div>
        </div>
      </div>

      <ul className={`mt-5 flex space-x-10 justify-center`}>
        <Link href="/about">
          <li className={`dark:text-gray-100 text-xl cursor-pointer`}>
            Who I am?
          </li>
        </Link>
        <Link href="/projects">
          <li className={`dark:text-gray-100 text-xl cursor-pointer`}>
            Check my works!
          </li>
        </Link>
        <Link href="/educations">
          <li className={`dark:text-gray-100 text-xl cursor-pointer`}>
            My educations!
          </li>
        </Link>
      </ul>
    </div>
  )
}

IndexPage.getLayout = getSimpleLayout('Home | @sondh0127')

export default IndexPage
