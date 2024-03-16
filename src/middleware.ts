import {withAuthMiddleware} from '@/middlewares/auth'
import {chain} from '@/middlewares/chain'
import {withI18nMiddleware} from '@/middlewares/i18n'

export default chain([withAuthMiddleware, withI18nMiddleware])

export const config = {
	// matcher: ['/', `/(en|pl)/:path*`]
	matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
}
