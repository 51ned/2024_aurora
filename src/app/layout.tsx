import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import { BGWrap } from 'ui/atoms/.'
import { Article, Aside, Footer, Header, Nav, Main } from 'ui/orgs/.'

import { GTM } from 'utils/.'

import vars from 'lib/vars.json'

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
        <Header />

        <Main>
          <BGWrap bgColor={vars['brown-color']}>
            <Article />
          </BGWrap>
        </Main>

        <Nav />
        <Aside />
        <Footer />

        <GTM />
      </body>
    </html>
  )
}
