import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

 
export function middleware(req: NextRequest, res: NextResponse) {
  const reqHeaders = new Headers(req.headers)
  const theme = reqHeaders.get('sec-ch-prefers-color-scheme')

  console.log(theme)
}