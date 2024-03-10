import {getTranslations, unstable_setRequestLocale} from 'next-intl/server'
import {IParamsLocale} from '@/models'
import {SettingsPassword} from '@/modules/settings/password'

export const generateMetadata = async ({params: {locale}}: IParamsLocale) => {
	const t = await getTranslations({locale, namespace: 'Settings'})
	return {
		title: t('title')
	}
}

const SettingsPasswordPage = ({params: {locale}}: IParamsLocale) => {
	unstable_setRequestLocale(locale)
	return <SettingsPassword />
}

export default SettingsPasswordPage
