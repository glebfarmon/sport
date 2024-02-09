import {getTranslations, unstable_setRequestLocale} from 'next-intl/server'
import {IParamsLocale} from '@/types'
import {Register} from '@/modules/auth/register'
import {ReCaptchaProvider} from 'next-recaptcha-v3'
import {config} from '@/config'

export const generateMetadata = async ({params: {locale}}: IParamsLocale) => {
  const t = await getTranslations({locale, namespace: 'Auth.Register'})
  return {
    title: t('title')
  }
}

const RegisterPage = ({params: {locale}}: IParamsLocale) => {
  unstable_setRequestLocale(locale)
  return (
    <ReCaptchaProvider reCaptchaKey={config.recaptcha.public} language={locale}>
      <Register />
    </ReCaptchaProvider>
  )
}

export default RegisterPage
