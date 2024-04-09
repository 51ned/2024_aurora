import type { Metadata } from 'next'

import { Montserrat } from 'next/font/google'


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
        { children }
      </body>
    </html>
  )
}
