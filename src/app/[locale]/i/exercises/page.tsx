import {getTranslations, unstable_setRequestLocale} from 'next-intl/server'
import {IParamsLocale} from '@/models'
import {Exercises} from '@/modules/exercises'

export const generateMetadata = async ({params: {locale}}: IParamsLocale) => {
	const t = await getTranslations({locale, namespace: 'Exercises'})
	return {
		title: t('title')
	}
}

const ExercisesPage = ({params: {locale}}: IParamsLocale) => {
	unstable_setRequestLocale(locale)
	return <Exercises />
}

export default ExercisesPage
