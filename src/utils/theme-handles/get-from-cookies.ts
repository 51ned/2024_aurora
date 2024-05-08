'use server'


import { cookies } from 'next/headers'


export async function getFromCookies() {
  const cookieStore = cookies()
  const theme = cookieStore.get('theme')
  
  return theme?.value
}