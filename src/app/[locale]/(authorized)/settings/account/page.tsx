import {getTranslations, unstable_setRequestLocale} from 'next-intl/server'
import {IParamsLocale} from '@/models'
import {SettingsAccount} from '@/modules/settings/account'

export const generateMetadata = async ({params: {locale}}: IParamsLocale) => {
	const t = await getTranslations({locale, namespace: 'Settings'})
	return {
		title: t('title')
	}
}

const SettingsAccountPage = ({params: {locale}}: IParamsLocale) => {
	unstable_setRequestLocale(locale)
	return <SettingsAccount />
}

export default SettingsAccountPage
