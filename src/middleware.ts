import createMiddleware from 'next-intl/middleware'
import {defaultLocale, localePrefix, locales} from '@/data'

export default createMiddleware({
  defaultLocale,
  locales,
  localePrefix
})

export const config = {
  // matcher: ['/', `/(en|pl)/:path*`]
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
}
