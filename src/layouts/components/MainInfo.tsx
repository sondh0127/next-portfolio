import * as React from 'react'

import ReactLogo from '@/components/icons/ReactLogo'

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
          src="https://avatars3.githubusercontent.com/u/62163604?s=460&amp;u=2d0ed85df93a996e55f9f81034abd2975d2342d3&amp;v=4"
          loading="lazy"
        />
      </div>
      <div className={`text-gray-600 dark:text-gray-100`}>
        <div className={`flex flex-col items-center font-bold sm:flex-row`}>
          <span className={`text-xl sm:mr-2`} role="img" aria-label="name">
            Son H. Do
          </span>
          <span className={`text-lg`} role="img" aria-label="name">
            🎉 Availale for hire.
          </span>
        </div>
        <div className={`mt-1 text-base font-medium`}>
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
            <div className={`flex flex-row-reverse items-center sm:flex-row`}>
              <div className={`sm:mr-2`} style={{ color: '#61DAFB' }}>
                <ReactLogo className={`inline-block w-5 h-5`} />
              </div>
              <div className={`flex-1`}>Front-End developer</div>
            </div>
          </div>
          <div className={`text-sm italic text-purple-600`}>@sondh0127</div>
        </div>
      </div>
    </div>
  )
}

export default MainInfo
