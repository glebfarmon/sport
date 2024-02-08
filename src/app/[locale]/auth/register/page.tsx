import {getTranslations, unstable_setRequestLocale} from 'next-intl/server'
import {IParamsLocale} from '@/types'
import {Register} from '@/modules/auth/register'

export const generateMetadata = async ({params: {locale}}: IParamsLocale) => {
  const t = await getTranslations({locale, namespace: 'Auth.Register'})
  return {
    title: t('title')
  }
}

const RegisterPage = ({params: {locale}}: IParamsLocale) => {
  unstable_setRequestLocale(locale)
  return <Register />
}

export default RegisterPage
