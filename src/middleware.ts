import createMiddleware from 'next-intl/middleware'
import {DEFAULT_LOCALE, LOCALE_PREFIX, LOCALES} from '@/constants'

export default createMiddleware({
	defaultLocale: DEFAULT_LOCALE,
	locales: LOCALES,
	localePrefix: LOCALE_PREFIX
})

export const config = {
	// matcher: ['/', `/(en|pl)/:path*`]
	matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
}
