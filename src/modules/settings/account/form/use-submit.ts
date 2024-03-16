import {useTranslations} from 'next-intl'
import {useCallback} from 'react'
import type {UseFormResetField} from 'react-hook-form'
import {toast} from '@/components/ui/use-toast'
import {useUpdateUserMutation} from '@/store/api/user.api'
import type {TFormSchema, TOutputFormSchema} from '@/modules/settings/account/form/use-form-schema'

export const useSubmit = (
	formSchema: TFormSchema,
	resetField: UseFormResetField<TOutputFormSchema>
) => {
	const t = useTranslations('Settings.Tabs.Account')
	const [updateUser] = useUpdateUserMutation()

	return useCallback(
		(data: TOutputFormSchema) => {
			updateUser(data)
				.unwrap()
				.then(() => {
					toast({description: t('success_save')})
					resetField('password', {defaultValue: ''})
				})
		},
		[formSchema]
	)
}
