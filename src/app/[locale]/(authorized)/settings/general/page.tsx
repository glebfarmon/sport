import {getTranslations, unstable_setRequestLocale} from 'next-intl/server'
import {IParamsLocale} from '@/models'
import {SettingsGeneral} from '@/modules/settings/general'

export const generateMetadata = async ({params: {locale}}: IParamsLocale) => {
	const t = await getTranslations({locale, namespace: 'Settings'})
	return {
		title: t('title')
	}
}

const SettingsGeneralPage = ({params: {locale}}: IParamsLocale) => {
	unstable_setRequestLocale(locale)
	return <SettingsGeneral />
}

export default SettingsGeneralPage
