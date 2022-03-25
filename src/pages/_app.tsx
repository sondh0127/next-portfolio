import '@/styles/tailwind.css'

import ProgressBar from '@badrap/bar-of-progress'
import Router from 'next/router'

import { AppPropsWithLayout } from '@/types'

const AppProvider: React.FC = ({ children }) => {
  return <>{children}</>
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
