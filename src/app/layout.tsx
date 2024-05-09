import { Suspense } from 'react'

import { Montserrat } from 'next/font/google'
import type { Metadata, Viewport } from 'next'

import { Aside, Footer, Nav } from 'ui/orgs'
import { ThemeToggle, GTM } from 'ui/mols'
import { getFromCookies, getFromHeaders } from 'utils/theme-handles'

import 'public/styles.css'


export const metadata: Metadata = {
  title: '',
  description: ''
}

export const viewport: Viewport = {
  colorScheme:'light dark',
  // themeColor: [
  //   { media: '(prefers-color-scheme: light)', color: 'white' },
  //   { media: '(prefers-color-scheme: dark)', color: 'black' },
  // ]
}


const font = Montserrat({ subsets: ['cyrillic'] })


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  let theme: null | string | undefined = await getFromCookies()

  if (!theme) {
    theme = await getFromHeaders()
  }

  return (
    <html dir='ltr' lang='ru'>
      <body className={font.className}>
        { children }

        <Nav />

        <Aside>
          asd
          {/* <ThemeToggle theme={theme} /> */}
        </Aside>

        <Footer />
        
        <Suspense>
          <GTM />
        </Suspense>
      </body>
    </html>
  )
}
