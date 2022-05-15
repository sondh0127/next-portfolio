import * as React from 'react'
import { useIsomorphicLayoutEffect } from '@/hooks'

const usePrevious = (theme: 'dark' | 'light') => {
  const ref = React.useRef<string>()
  React.useEffect(() => {
    ref.current = theme
  })
  return ref.current
}

export const ThemeContext = React.createContext<{
  theme: 'dark' | 'light'
  toggleTheme: () => void
}>({ theme: 'dark', toggleTheme: () => null })

export const ThemeProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  // defaults to light theme
  const [theme, setTheme] = React.useState<'dark' | 'light'>('light')

  // set user's preferred color scheme on first load

  useIsomorphicLayoutEffect(() => {
    setTheme(
      !!window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light',
    )
  }, [])

  // change theme
  const oldTheme = usePrevious(theme)
  React.useEffect(() => {
    document.documentElement.classList.remove(`theme-${oldTheme}`)
    document.documentElement.classList.add(`theme-${theme}`)
  }, [theme, oldTheme])

  function toggleTheme() {
    if (theme === 'light') setTheme('dark')
    else setTheme('light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeCtx = () => React.useContext(ThemeContext)
