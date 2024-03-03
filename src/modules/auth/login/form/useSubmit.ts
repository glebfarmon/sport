import {useTranslations} from 'next-intl'
import {useRouter} from 'next/navigation'
import {useCallback} from 'react'
import {z} from 'zod'
import {toast} from '@/components/ui/use-toast'
import {PAGES} from '@/constants/pages'
import {useLoginMutation} from '@/store/api/auth.api'
import {useFormSchema} from './useFormSchema'

export const useSubmit = (formSchema: ReturnType<typeof useFormSchema>) => {
	const t = useTranslations('Auth')
	const [loginUser, {isLoading}] = useLoginMutation()
	const {push} = useRouter()

	return useCallback(
		(data: z.infer<typeof formSchema>) => {
			loginUser(data)
				.unwrap()
				.then(() => {
					toast({description: t('Login.success')})
					push(PAGES.HOME)
				})
		},
		[formSchema]
	)
}
