import {valibotResolver} from '@hookform/resolvers/valibot'
import type {HTMLInputTypeAttribute} from 'react'
import {useForm as useReactForm} from 'react-hook-form'
import {
	type TOutputFormSchema,
	useFormSchema
} from '@/modules/settings/password/form/use-form-schema'
import {useSubmit} from '@/modules/settings/password/form/use-submit'

interface IFormData {
	property: keyof TOutputFormSchema
	placeholder: string
	type: HTMLInputTypeAttribute
	autocomplete: HTMLInputElement['autocomplete']
}

const formData: IFormData[] = [
	{property: 'password', placeholder: '123456', type: 'password', autocomplete: 'current-password'},
	{property: 'password_new', placeholder: '123456', type: 'password', autocomplete: 'new-password'}
]

export const useForm = () => {
	const formSchema = useFormSchema()

	const form = useReactForm<TOutputFormSchema>({
		resolver: valibotResolver(formSchema),
		defaultValues: {
			password: '',
			password_new: ''
		}
	})

	const onSubmit = useSubmit(formSchema, form.reset)

	return {formData, form, onSubmit}
}
