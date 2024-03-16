import createMiddleware from 'next-intl/middleware'
import {DEFAULT_LOCALE, LOCALE_PREFIX, LOCALES} from '@/constants'

export const withI18nMiddleware = () => {
	return createMiddleware({
		defaultLocale: DEFAULT_LOCALE,
		locales: LOCALES,
		localePrefix: LOCALE_PREFIX
	})
}
