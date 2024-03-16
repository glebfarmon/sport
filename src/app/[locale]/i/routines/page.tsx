import {getTranslations, unstable_setRequestLocale} from 'next-intl/server'
import {IParamsLocale} from '@/models'
import {Routines} from '@/modules/routines'

export const generateMetadata = async ({params: {locale}}: IParamsLocale) => {
	const t = await getTranslations({locale, namespace: 'Routines'})
	return {
		title: t('title')
	}
}

const RoutinesPage = ({params: {locale}}: IParamsLocale) => {
	unstable_setRequestLocale(locale)
	return <Routines />
}

export default RoutinesPage
