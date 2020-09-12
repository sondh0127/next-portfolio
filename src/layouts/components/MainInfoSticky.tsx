import * as React from 'react'

/* ---------------------------------- Types --------------------------------- */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface MainInfoStickyProps {}

export const MainInfoSticky: React.FC<MainInfoStickyProps> = () => {
  return (
    <div className={`sticky top-0 z-10 w-full`}>
      <div
        className={`flex flex-col items-center py-2 bg-gray-100 border-b border-gray-300 sm:flex-row px-7 dark:bg-gray-800`}
      >
        <div
          className={`relative flex-shrink-0 w-12 text-center no-underline rounded-full select-none sm:mr-6 md:w-16`}
        >
          <img
            alt="avatar"
            className="object-cover w-full h-full bg-purple-300 rounded-full"
            src="https://avatars3.githubusercontent.com/u/62163604?s=460&amp;u=2d0ed85df93a996e55f9f81034abd2975d2342d3&amp;v=4"
            loading="lazy"
          />
        </div>
        <div className={`text-gray-800 dark:text-gray-100`}>
          <div className={`flex flex-col items-center font-bold sm:flex-row`}>
            <span className={`text-lg sm:mr-2`} role="img" aria-label="name">
              Son Do Hong
            </span>
            <span className={`text-base`} role="img" aria-label="name">
              🎉 Looking for a job.
            </span>
          </div>
          <div className={`flex items-center mt-1 text-sm font-medium`}>
            <div>
              <span role="img" aria-label="vietnam">
                Hanoi / Vietnam 🇻🇳
              </span>
            </div>
            <div className={`ml-2 text-xs italic text-purple-600`}>
              @sondh0127
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainInfoSticky
