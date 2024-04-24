import { Suspense } from 'react'

import { Montserrat } from 'next/font/google'
import type { Metadata } from 'next'

import { Aside, Footer, Header, Nav } from 'ui/orgs/.'

import { GTM } from 'utils/.'

import 'public/styles.scss'


const montserrart = Montserrat({ subsets: ['cyrillic'] })


export const metadata: Metadata = {
  title: '',
  description: ''
}


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html dir='ltr' lang='ru'>
      <body className={montserrart.className}>
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
