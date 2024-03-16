import {useTranslations} from 'next-intl'
import {useCallback} from 'react'
import type {UseFormReset} from 'react-hook-form'
import {toast} from '@/components/ui/use-toast'
import {useUpdateUserMutation} from '@/store/api/user.api'
import type {TFormSchema, TOutputFormSchema} from '@/modules/settings/password/form/use-form-schema'

export const useSubmit = (formSchema: TFormSchema, reset: UseFormReset<TOutputFormSchema>) => {
	const t = useTranslations('Settings.Tabs.Account')
	const [updateUser] = useUpdateUserMutation()

	return useCallback(
		(data: TOutputFormSchema) => {
			updateUser(data)
				.unwrap()
				.then(() => {
					toast({description: t('success_save')})
					reset({password: '', password_new: ''})
				})
		},
		[formSchema]
	)
}
