import {getTranslations, unstable_setRequestLocale} from 'next-intl/server'
import {ReCaptchaProvider} from 'next-recaptcha-v3'
import {config} from '@/config'
import {IParamsLocale} from '@/models'
import {Register} from '@/modules/auth/register'

export const generateMetadata = async ({params: {locale}}: IParamsLocale) => {
	const t = await getTranslations({locale, namespace: 'Auth.Register'})
	return {
		title: t('title')
	}
}

const RegisterPage = ({params: {locale}}: IParamsLocale) => {
	unstable_setRequestLocale(locale)
	return (
		<ReCaptchaProvider
			reCaptchaKey={config.recaptcha.public}
			language={locale}>
			<Register />
		</ReCaptchaProvider>
	)
}

export default RegisterPage
