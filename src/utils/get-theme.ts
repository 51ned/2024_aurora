'use server'


import { cookies, headers } from 'next/headers'


export async function getFromCookies() {
  const cookieStore = cookies()
  const theme = cookieStore.get('theme')
  
  return theme?.value
}

export async function getFromHeaders() {
  const res = headers()
  const theme = res.get('sec-ch-prefers-color-scheme')

  return theme
}

export async function setToCookies(theme: string) {
  cookies().set('theme', theme)
}