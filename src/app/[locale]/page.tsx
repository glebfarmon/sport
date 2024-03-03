import {getTranslations, unstable_setRequestLocale} from 'next-intl/server'
import {IParamsLocale} from '@/models'
import {Home} from '@/modules/home'

export const generateMetadata = async ({params: {locale}}: IParamsLocale) => {
	const t = await getTranslations({locale, namespace: 'Home'})
	return {
		title: t('title')
	}
}

const HomePage = ({params: {locale}}: IParamsLocale) => {
	unstable_setRequestLocale(locale)
	return <Home />
}

export default HomePage
