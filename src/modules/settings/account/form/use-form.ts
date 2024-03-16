import {valibotResolver} from '@hookform/resolvers/valibot'
import type {HTMLInputTypeAttribute} from 'react'
import {useForm as useReactForm} from 'react-hook-form'
import {
	type TOutputFormSchema,
	useFormSchema
} from '@/modules/settings/account/form/use-form-schema'
import {useSubmit} from '@/modules/settings/account/form/use-submit'

interface IFormData {
	property: keyof TOutputFormSchema
	placeholder: string
	type: HTMLInputTypeAttribute
	autocomplete: HTMLInputElement['autocomplete']
}

const formData: IFormData[] = [
	{property: 'full_name', placeholder: 'Troy Walker', type: 'text', autocomplete: 'name'},
	{property: 'username', placeholder: 'fernstalk', type: 'text', autocomplete: 'username'},
	{property: 'password', placeholder: '123456', type: 'password', autocomplete: 'current-password'}
]

export const useForm = () => {
	const formSchema = useFormSchema()
	const onSubmit = useSubmit(formSchema)

	const form = useReactForm<TOutputFormSchema>({
		resolver: valibotResolver(formSchema),
		defaultValues: {
			full_name: '',
			username: '',
			password: ''
		}
	})

	return {formData, form, onSubmit}
}
