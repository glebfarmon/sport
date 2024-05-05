import {useTranslations} from 'next-intl'
import {useRouter} from 'next/navigation'
import {useCallback} from 'react'
import {toast} from '@/components/ui/use-toast'
import {PAGES} from '@/constants/pages'
import {useLoginMutation} from '@/store/api/auth.api'
import type {TFormSchema, TOutputFormSchema} from '@/modules/auth/login/form/use-form-schema'

export const useSubmit = (formSchema: TFormSchema) => {
	const t = useTranslations('Auth.Login')
	const [loginUser] = useLoginMutation()
	const {push} = useRouter()

	return useCallback(
		async (data: TOutputFormSchema) => {
			await loginUser(data)
				.unwrap()
				.then(() => {
					toast({description: t('success')})
					push(PAGES.ROUTINES)
				})
		},
		[formSchema]
	)
}
