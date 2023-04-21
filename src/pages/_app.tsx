import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { Inter, Montserrat } from 'next/font/google'
import { Fragment, ReactNode } from 'react'
import { Meta, MetaProps } from '@layout/meta'
// import { Cursor } from '@layout/cursor'

import '@style/vars.css'
import '@style/global.css'
import '@style/flowing.css'
import '@style/collapse.css'

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  layout?: ReactNode
  meta?: MetaProps
}

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.layout || (Fragment as any)
  const metaProps: MetaProps = Component.meta ?? {}

  return (
    <main className={`${inter.variable} ${montserrat.variable} font-sans`}>
      <Layout>
        <Meta {...metaProps} />
        <Component {...pageProps} />
        {/* <Cursor /> */}
      </Layout>
    </main>
  )
}
