import {getTranslations, unstable_setRequestLocale} from 'next-intl/server'
import {IParamsLocale} from '@/models'
import {Settings} from '@/modules/settings'

export const generateMetadata = async ({params: {locale}}: IParamsLocale) => {
	const t = await getTranslations({locale, namespace: 'Settings'})
	return {
		title: t('title')
	}
}

const SettingsPage = ({params: {locale}}: IParamsLocale) => {
	unstable_setRequestLocale(locale)
	return <Settings />
}

export default SettingsPage
