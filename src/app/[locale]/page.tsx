import Home from '@/modules/home'
import {IParamsLocale} from '@/types'
import {getTranslations, unstable_setRequestLocale} from 'next-intl/server'
import {config} from '@/config'

export const generateMetadata = async ({params: {locale}}: IParamsLocale) => {
  const t = await getTranslations({locale, namespace: 'Home'})
  return {
    title: `${config.title} > ${t('title')}`
  }
}

const HomePage = ({params: {locale}}: IParamsLocale) => {
  unstable_setRequestLocale(locale)
  return <Home />
}

export default HomePage
