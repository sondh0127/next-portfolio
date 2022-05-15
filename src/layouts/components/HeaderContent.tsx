import { cx } from '@/lib'
import { Avatar } from '@/components/shared'
import React from 'react'

import CustomLink from '@/components/CustomLink'
import Switch from '@/components/Switch'

import { Logo, MoonSolid, SunSolid } from './icons'

const ROUTES = [
  {
    path: '/',
    name: 'Home',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className={`w-8 h-8`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
    iconSolid: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className={`w-8 h-8`}
      >
        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
      </svg>
    ),
  },
  {
    path: '/about',
    name: 'About',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className={`w-8 h-8`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
        />
      </svg>
    ),
    iconSolid: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className={`w-8 h-8`}
      >
        <path
          fillRule="evenodd"
          d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    path: '/projects',
    name: 'Projects',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className={`w-8 h-8`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
        />
      </svg>
    ),
    iconSolid: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className={`w-8 h-8`}
      >
        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
      </svg>
    ),
  },
  {
    path: '/educations',
    name: 'Educations',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className={`w-8 h-8`}
      >
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
        />
      </svg>
    ),
    iconSolid: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className={`w-8 h-8`}
      >
        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
      </svg>
    ),
  },
  {
    path: '/work',
    name: 'Works',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className={`w-8 h-8`}
      >
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
        />
      </svg>
    ),
    iconSolid: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className={`w-8 h-8`}
      >
        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
      </svg>
    ),
  },
]

export const preferredThemeAtom = atom<null | string>(null)

import { atom, useAtom } from 'jotai'

export const HeaderContent = () => {
  const [preferredTheme, setPreferredTheme] = useAtom(preferredThemeAtom)

  useEffect(() => {
    try {
      const found = localStorage.getItem('theme')
      setPreferredTheme(found)
    } catch (error) {}
  }, [])

  useEffect(() => {
    const prefersDarkQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const updateTheme = (e: MediaQueryListEvent) => {
      setPreferredTheme('system')
    }
    prefersDarkQuery.addEventListener('change', updateTheme)

    return () => {
      prefersDarkQuery.removeEventListener('change', updateTheme)
    }
  }, [])

  return (
    <div className={`relative w-20 xl:w-52 `}>
      <div className={`fixed top-0 flex flex-col h-full`}>
        <div
          className={cx(
            'flex flex-col justify-between w-20 h-full px-2 py-2 overflow-y-auto',
            'xl:w-52',
          )}
        >
          <div className={`flex flex-col items-center xl:items-start`}>
            <div
              className={cx(
                'flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full',
                'cursor-pointer hover:bg-purple-200 xl:ml-12',
              )}
            >
              <Logo className={`h-8`} />
            </div>
            <div className={`mt-2`}>
              {ROUTES.map((item, index) => (
                <CustomLink href={`${item.path}`} key={`${item.path}-${index}`}>
                  {({ isActive, href }) => (
                    <a
                      title={item.name}
                      href={href}
                      className={`hover:text-purple-600 dark:hover:text-purple-600 flex flex-col items-start ${
                        isActive
                          ? `text-purple-600`
                          : 'text-gray-800 dark:text-gray-100'
                      } `}
                    >
                      <div
                        key={item.path}
                        className={cx(
                          'flex items-center p-2 mt-2 transition duration-150 ease-in-out',
                          'rounded-full hover:bg-purple-100',
                        )}
                      >
                        <div>{isActive ? item.iconSolid : item.icon}</div>
                        <div
                          className={`hidden mx-4 mt-1 text-lg font-bold xl:block`}
                        >
                          {item.name}
                        </div>
                      </div>
                    </a>
                  )}
                </CustomLink>
              ))}
            </div>
          </div>

          <div className={`self-center`}>
            <div
              className={cx(
                'flex items-center justify-center flex-1 mb-4 space-x-1 text-gray-800',
                'dark:text-gray-100',
              )}
            >
              <SunSolid className={`hidden w-5 h-5 xl:block`} />
              <Switch
                onChange={() => {
                  ;(window as any).__setPreferredTheme(
                    preferredTheme === 'light' ? 'dark' : 'light',
                  )
                  setPreferredTheme(
                    preferredTheme === 'light' ? 'dark' : 'light',
                  )
                }}
                checked={preferredTheme === 'dark'}
              />
              <MoonSolid className={`hidden w-5 h-5 xl:block`} />
            </div>
            <div
              className={cx(
                'flex flex-col items-center p-2 mt-2 rounded-full cursor-pointer',
                'hover:bg-purple-100 lg:flex-row',
              )}
            >
              <Avatar src="https://avatars3.githubusercontent.com/u/62163604?s=460&u=2d0ed85df93a996e55f9f81034abd2975d2342d3&v=4" />
              <div className={`hidden mx-4 mt-1 font-semibold xl:block`}>
                <div
                  className={cx(
                    'text-sm text-gray-800 text dark:hover:text-purple-600',
                    'dark:text-gray-100',
                  )}
                >
                  Son H.Do
                </div>
                <div className={`text-xs text-gray-500`}>@sondh017</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderContent
