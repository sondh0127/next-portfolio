import React from 'react'
import IconReact from '~icons/logos/react.jsx'
import IconVue from '~icons/logos/vue.jsx'
import IconSvelte from '~icons/logos/svelte-icon.jsx'

import { srcAvatar } from '@/utils/data'

/* -------------------------------- Constant -------------------------------- */

/* ---------------------------------- Types --------------------------------- */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface MainInfoProps {}

export const MainInfo: React.FC<MainInfoProps> = (props) => {
  return (
    <div
      className={`flex flex-col items-center py-6 border-b border-gray-300 sm:flex-row px-7`}
    >
      <div
        className={`relative flex-shrink-0 w-24 text-center no-underline rounded-full select-none sm:mr-6 md:w-32`}
      >
        <img
          alt="avatar"
          className="object-cover w-full h-full bg-purple-300 rounded-full"
          src={srcAvatar}
          loading="lazy"
        />
      </div>
      <div className={`text-gray-600 dark:text-gray-100`}>
        <div className={`flex flex-col items-center font-bold sm:flex-row`}>
          <span className={`text-xl sm:mr-2`} role="img" aria-label="name">
            Son Hong Do
          </span>
        </div>
        <div className={`text-lg font-medium`} role="img" aria-label="name">
          🎉 Available for hire.
        </div>
        <div className={`mt-1 text-base font-medium`}>
          <div>
            <span role="img" aria-label="vietnam">
              Hanoi, Vietnam 🇻🇳
            </span>
          </div>

          <div className={`flex items-center justify-center space-x-2`}>
            <IconReact className={`inline-block w-4 h-4`} />
            <div className={'font-medium'}>Software Engineer</div>
            <IconVue className={`inline-block w-4 h-4`} />
            <div className={`font-medium`}>Front-end developer</div>
            <IconSvelte className={`inline-block w-4 h-4`} />
          </div>
          <div>
            <span role="img" aria-label="graduated">
              Middle level - 3+ years of experience
            </span>
          </div>

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
      </div>
    </div>
  )
}

export default MainInfo
