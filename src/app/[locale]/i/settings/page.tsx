import {getTranslations, unstable_setRequestLocale} from 'next-intl/server'
import {IParamsLocale, ISearchParams} from '@/models'
import {Settings} from '@/modules/settings'
import {parseTab} from '@/modules/settings/schema'

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
