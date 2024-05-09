import {getTranslations, unstable_setRequestLocale} from 'next-intl/server'
import {IParamsLocale, ISearchParams} from '@/models'
import {parseTab} from '@/app/[locale]/i/settings/schema'
import {Settings} from '@/modules/settings'

export const generateMetadata = async ({params: {locale}}: IParamsLocale) => {
	const t = await getTranslations({locale, namespace: 'Settings'})
	return {
		title: t('title')
	}
}

const SettingsPage = ({params: {locale}, searchParams}: IParamsLocale & ISearchParams) => {
	unstable_setRequestLocale(locale)
	return <Settings tab={parseTab(searchParams?.tab)} />
}

export default SettingsPage
