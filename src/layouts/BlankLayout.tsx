import Head from 'next/head'

type BlankLayoutProps = {
  title?: string
  children: React.ReactNode
}

const BlankLayout = ({ title, children }: BlankLayoutProps) => (
  <>
    <Head>
      <title>{title || 'sondh0127'}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    {children}
  </>
)

export default BlankLayout
