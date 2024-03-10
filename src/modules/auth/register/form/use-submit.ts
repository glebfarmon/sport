import {useTranslations} from 'next-intl'
import {useReCaptcha} from 'next-recaptcha-v3'
import {useRouter} from 'next/navigation'
import {useCallback} from 'react'
import {toast} from '@/components/ui/use-toast'
import {PAGES} from '@/constants/pages'
import {useRegisterMutation} from '@/store/api/auth.api'
import {TFormSchema, TOutputFormSchema} from '@/modules/auth/register/form/use-form-schema'

export const useSubmit = (formSchema: TFormSchema) => {
	const t = useTranslations()
	const [registerUser] = useRegisterMutation()
	const {executeRecaptcha} = useReCaptcha()
	const {push} = useRouter()

	return useCallback(
		async ({full_name, username, password}: TOutputFormSchema) => {
			const token = await executeRecaptcha('form_submit')
			if (!token) {
				return toast({
					title: 'Google ReCaptcha',
					description: t('Errors.recaptcha'),
					variant: 'destructive'
				})
			}

			registerUser({full_name, username, password, token})
				.unwrap()
				.then(() => {
					toast({description: t('Auth.Register.success')})
					push(PAGES.ROUTINES)
				})
		},
		[formSchema]
	)
}
