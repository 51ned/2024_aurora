'use server'


import { headers } from 'next/headers'


export async function getFromHeaders() {
  const res = headers()
  const theme = res.get('sec-ch-prefers-color-scheme')

  return theme
}
