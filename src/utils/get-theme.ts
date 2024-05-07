import { cookies, headers } from 'next/headers'


export async function getTheme() {
  let theme: null | string | undefined = getFromCookies()

  if (!theme) {
    theme = getFromHeaders()
  }

  if (!theme) {
    theme = await getFromWindow()
  }

  return theme
}

function getFromCookies() {
  const cookieStore = cookies()
  const theme = cookieStore.get('theme')
  
  return theme?.value
}

function getFromHeaders() {
  const res = headers()
  const theme = res.get('sec-ch-prefers-color-scheme')

  return theme
}

async function getFromWindow() {
  let theme = 'light'

  if (typeof window !== 'undefined') {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      theme = 'dark'
    }
  }

  return theme
}

async function setToCookies(theme: string) {
  cookies().set('theme', theme)
}