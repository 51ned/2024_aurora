import { Suspense } from 'react'

import { headers } from 'next/headers'
import { Montserrat } from 'next/font/google'
import type { Metadata, Viewport } from 'next'

import { Aside, Footer, Header, Nav } from 'ui/orgs'
import { ColorThemeToggle } from 'ui/mols'
import { GTM } from 'utils/.'

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


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const res = headers()
  const headerTheme = res.get('sec-ch-prefers-color-scheme')

  return (
    <html dir='ltr' lang='ru'>
      <body className={font.className}>
        <Header />

        { children }

        <Nav />

        <Aside>
          <ColorThemeToggle theme={headerTheme} />
        </Aside>

        <Footer />
        
        <Suspense>
          <GTM />
        </Suspense>
      </body>
    </html>
  )
}
