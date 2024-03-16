import {useTranslations} from 'next-intl'
import {useRouter} from 'next/navigation'
import {useCallback} from 'react'
import {toast} from '@/components/ui/use-toast'
import {PAGES} from '@/constants/pages'
import {useLoginMutation} from '@/store/api/auth.api'
import type {TFormSchema, TOutputFormSchema} from '@/modules/auth/login/form/use-form-schema'

export const useSubmit = (formSchema: TFormSchema) => {
	const t = useTranslations('Auth')
	const [loginUser] = useLoginMutation()
	const {push} = useRouter()

	return useCallback(
		(data: TOutputFormSchema) => {
			loginUser(data)
				.unwrap()
				.then(() => {
					toast({description: t('Login.success')})
					push(PAGES.ROUTINES)
				})
		},
		[formSchema]
	)
}
