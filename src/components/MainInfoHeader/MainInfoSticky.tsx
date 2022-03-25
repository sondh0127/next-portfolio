
import { srcAvatar } from '@/utils/data'


export const MainInfoSticky = () => {
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
            src={srcAvatar}
            loading="lazy"
          />
        </div>
        <div className={`text-gray-800 dark:text-gray-100`}>
          <div
            className={`flex flex-col items-center font-semibold sm:flex-row`}
          >
            <span className={`text-lg sm:mr-2`} role="img" aria-label="name">
              Son Hong Do
            </span>
            <span className={`text-base`} role="img" aria-label="name">
              🎉 Available for hire.
            </span>
          </div>
          <div className={`flex items-center mt-1 text-sm font-medium`}>
            <div>
              <span role="img" aria-label="vietnam">
                Hanoi / Vietnam 🇻🇳
              </span>
            </div>
            <div className={`ml-2 text-xs italic text-purple-600`}>
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
    </div>
  )
}

export default MainInfoSticky
