import {valibotResolver} from '@hookform/resolvers/valibot'
import type {HTMLInputTypeAttribute} from 'react'
import {useForm as useReactForm} from 'react-hook-form'
import {TOutputFormSchema, useFormSchema} from '@/modules/auth/login/form/use-form-schema'
import {useSubmit} from '@/modules/auth/login/form/use-submit'

interface IFormData {
	property: keyof TOutputFormSchema
	placeholder: string
	type: HTMLInputTypeAttribute
	autocomplete: HTMLInputElement['autocomplete']
}

const formData: IFormData[] = [
	{property: 'username', placeholder: 'fernstalk', type: 'text', autocomplete: 'username'},
	{property: 'password', placeholder: '123456', type: 'password', autocomplete: 'new-password'}
]

export const useForm = () => {
	const formSchema = useFormSchema()
	const onSubmit = useSubmit(formSchema)

	const form = useReactForm<TOutputFormSchema>({
		resolver: valibotResolver(formSchema),
		defaultValues: {
			username: '',
			password: ''
		}
	})

	return {form, onSubmit, formData}
}
