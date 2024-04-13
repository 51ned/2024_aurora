import { Suspense } from 'react'

import type { Metadata } from 'next'
import Script from 'next/script'
import { Montserrat } from 'next/font/google'

import { Aside, Footer, Header, Nav } from 'ui/orgs/.'

import { GTM, setColorScheme } from 'utils/.'

import 'public/globals.scss'


const montserrart = Montserrat({ subsets: ['cyrillic'] })


export const metadata: Metadata = {
  title: '',
  description: ''
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  return (
    <html dir='ltr' lang='ru'>
      
      <body className={montserrart.className}>
        <Script id='scheme' strategy='beforeInteractive'>
          { setColorScheme() }
        </Script>
        
        <Header />
        <Nav />
        <Aside />
        <Footer />

        <Suspense>
          <GTM />
        </Suspense>
      </body>
    </html>
  )
}
