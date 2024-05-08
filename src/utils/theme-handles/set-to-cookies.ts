'use server'


import { cookies } from 'next/headers'


export async function setToCookies(theme: string) {
  cookies().set('theme', theme)
}
