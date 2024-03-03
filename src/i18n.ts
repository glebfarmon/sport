import {getRequestConfig} from 'next-intl/server'
import {notFound} from 'next/navigation'
import {LOCALES} from '@/constants'

export default getRequestConfig(async ({locale}) => {
	if (!LOCALES.includes(locale as any)) notFound()

	return {
		messages: (await import(`../messages/${locale}.json`)).default
	}
})
