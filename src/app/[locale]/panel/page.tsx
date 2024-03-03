import {getTranslations, unstable_setRequestLocale} from 'next-intl/server'
import {IParamsLocale} from '@/models'
import {Panel} from '@/modules/panel'

export const generateMetadata = async ({params: {locale}}: IParamsLocale) => {
	const t = await getTranslations({locale, namespace: 'Panel'})
	return {
		title: t('title')
	}
}

const PanelPage = ({params: {locale}}: IParamsLocale) => {
	unstable_setRequestLocale(locale)
	return <Panel />
}

export default PanelPage
