import { Montserrat } from 'next/font/google'
import type { Metadata, Viewport } from 'next'

import { Aside, Footer, Header, Nav } from 'ui/orgs'
import { GTM } from 'utils/.'

import 'public/styles.css'


export const metadata: Metadata = {
  title: '',
  description: ''
}

// export const viewport: Viewport = {
//   colorScheme:'light dark',
//   themeColor: [
//     { media: '(prefers-color-scheme: light)', color: 'white' },
//     { media: '(prefers-color-scheme: dark)', color: 'black' },
//   ]
// }


const montserrart = Montserrat({ subsets: ['cyrillic'] })


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html dir='ltr' lang='ru'>
      <body className={montserrart.className}>
        <Header />

        { children }

        <Nav />
        <Aside />
        <Footer />
        
        <GTM />
      </body>
    </html>
  )
}
