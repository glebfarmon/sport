import {useTranslations} from 'next-intl'
import {useReCaptcha} from 'next-recaptcha-v3'
import {useRouter} from 'next/navigation'
import {useCallback} from 'react'
import {z} from 'zod'
import {toast} from '@/components/ui/use-toast'
import {PAGES} from '@/constants/pages'
import {useRegisterMutation} from '@/store/api/auth.api'
import {useFormSchema} from './useFormSchema'

export const useSubmit = (formSchema: ReturnType<typeof useFormSchema>) => {
	const [t, e] = [useTranslations('Auth'), useTranslations('Errors')]
	const [registerUser] = useRegisterMutation()
	const {executeRecaptcha} = useReCaptcha()
	const {push} = useRouter()

	return useCallback(
		async ({full_name, username, password}: z.infer<typeof formSchema>) => {
			const token = await executeRecaptcha('form_submit')
			if (!token) {
				return toast({
					title: 'Google ReCaptcha',
					description: e('recaptcha'),
					variant: 'destructive'
				})
			}

			registerUser({full_name, username, password, token})
				.unwrap()
				.then(() => {
					toast({description: t('Register.success')})
					push(PAGES.HOME)
				})
		},
		[formSchema]
	)
}
