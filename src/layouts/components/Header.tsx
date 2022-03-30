import { cx } from '@/lib'
import { ButtonIcon } from '@/components/shared'
import React from 'react'

import CustomLink from '@/components/CustomLink'
import { useThemeCtx } from '@/contexts/ThemeContext'

import Switch from '../../components/Switch'
import { MenuSolid, MoonSolid, SunSolid } from './icons'
import Logo from './Logo'

interface HeaderProps {
  onMobileMenuClick?: () => void
}

export const ROUTES = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About' },
  { path: '/educations', name: 'Educations' },
  { path: '/projects', name: 'Projects' },
]

const AuthItem = () => {
  // const currentUser = useCurrentUser()
  // if (currentUser) {
  //   return (
  //     <>
  //       <button
  //         className=""
  //         onClick={async () => {
  //           await logout()
  //         }}
  //       >
  //         Logout
  //       </button>
  //     </>
  //   )
  // }
  return null
}

const Header: React.FC<HeaderProps> = (props) => {
  const { onMobileMenuClick: onMobileMenuCick } = props
  const { theme, toggleTheme } = useThemeCtx()

  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="z-40 bg-white shadow-md dark:bg-gray-800">
      <nav
        className={cx(
          'flex items-center justify-between h-full mx-auto text-purple-600',
          'md:max-w-full dark:text-purple-300 sm:max-w-xl'
        )}
      >
        <ul className="flex items-center flex-1 px-3 py-2">
          <div className="inline-block">
            <Logo />
          </div>
          <ul className={`hidden md:flex md:ml-6`}>
            {/* Menu */}
            {ROUTES.map((item, index) => {
              return (
                <CustomLink href={`${item.path}`} key={`${item.path}-${index}`}>
                  {({ isActive, href }) => (
                    <li
                      className={cx(
                        'relative px-4 py-2 text-gray-600 dark:hover:text-purple-400',
                        'hover:text-purple-600 dark:text-gray-300',
                        isActive && `text-purple-600 dark:text-purple-400`
                      )}
                    >
                      <a
                        className={cx(
                          'inline-flex items-center w-full text-sm font-semibold transition-colors',
                          'duration-150'
                        )}
                        href={href}
                      >
                        <span>{item.name}</span>
                      </a>
                    </li>
                  )}
                </CustomLink>
              )
            })}
          </ul>
        </ul>

        <ul className="flex px-3 py-2 item-center">
          <li className="flex items-center space-x-1">
            <SunSolid />
            <Switch
              onChange={() => {
                toggleTheme()
              }}
              checked={theme === 'dark'}
            />
            <MoonSolid />
          </li>
          {/* Profile menu */}
          <li>
            <AuthItem />
          </li>

          <li className="ml-4 md:hidden">
            <ButtonIcon
              size="sm"
              variant="light"
              icon={MenuSolid}
              onClick={() => setIsOpen(!isOpen)}
              className="p-1 -ml-1 rounded-md focus:outline-none focus:shadow-outline-purple"
              aria-label="Menu"
            ></ButtonIcon>
          </li>
        </ul>
      </nav>

      <div>
        <ul className={`${isOpen ? `block` : `hidden`} md:hidden`}>
          {/* Menu */}
          {ROUTES.map((item, index) => {
            return (
              <CustomLink href={`${item.path}`} key={`${item.path}-${index}`}>
                {({ isActive, href }) => (
                  <li
                    className={cx(
                      'relative px-4 py-2 text-gray-600 dark:hover:text-purple-400',
                      'hover:text-purple-600 dark:text-gray-300 dark:hover:bg-purple-100',
                      'hover:bg-purple-300 sm:px-10',
                      isActive && `text-purple-600 dark:text-purple-400`
                    )}
                  >
                    <a
                      className={cx(
                        'inline-flex items-center w-full text-sm font-semibold transition-colors',
                        'duration-150'
                      )}
                      href={href}
                    >
                      <span>{item.name}</span>
                    </a>
                  </li>
                )}
              </CustomLink>
            )
          })}
        </ul>
      </div>
    </header>
  )
}

export default Header
