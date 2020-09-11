import '@/styles/tailwind.css'

import ProgressBar from '@badrap/bar-of-progress'
import { ThemeProvider as RetailProvider } from '@retail-ui/core'
import Router from 'next/router'

import { ThemeProvider } from '@/contexts/ThemeContext'
import { AppPropsWithLayout } from '@/types'

const AppProvider: React.FC = ({ children }) => {
  return <RetailProvider>{children}</RetailProvider>
}

const progress = new ProgressBar({
  size: 2,
  color: '#7e3af2',
  className: 'bar-of-progress',
  delay: 100,
})

Router.events.on('routeChangeStart', progress.start)
Router.events.on('routeChangeComplete', progress.finish)
Router.events.on('routeChangeError', progress.finish)

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page) => page)

  return <AppProvider>{getLayout(<Component {...pageProps} />)}</AppProvider>
}

export default MyApp
