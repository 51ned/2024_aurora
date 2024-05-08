'use client'


import { useEffect, useId } from 'react'

import { usePathname, useSearchParams } from 'next/navigation'
import Script from 'next/script'

import { GTM_ID, pageview } from 'lib/gtm'


export function GTM() {
  const pathName = usePathname()
  const searchParams = useSearchParams()
  const scriptId = useId()

 useEffect(() => {
    pathName && pageview(pathName)
  }, [pathName, searchParams])

  return (
    <>
      <noscript>
        <iframe
          height='0'
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          style={{ display: 'none', visibility: 'hidden' }}
          width='0'
        />
      </noscript>

      <Script id={scriptId} strategy='afterInteractive'>
        { `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');` }
      </Script>
    </>
  )
}