import {getTranslations, unstable_setRequestLocale} from 'next-intl/server'
import {IParamsLocale} from '@/models'
import {Cabinet} from '@/modules/cabinet'

export const generateMetadata = async ({params: {locale}}: IParamsLocale) => {
	const t = await getTranslations({locale, namespace: 'Cabinet'})
	return {
		title: t('title')
	}
}

const CabPage = ({params: {locale}}: IParamsLocale) => {
	unstable_setRequestLocale(locale)
	return <Cabinet />
}

export default CabPage
