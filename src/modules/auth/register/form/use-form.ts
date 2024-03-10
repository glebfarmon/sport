import {valibotResolver} from '@hookform/resolvers/valibot'
import type {HTMLInputTypeAttribute} from 'react'
import {useForm as useReactForm} from 'react-hook-form'
import {TOutputFormSchema, useFormSchema} from '@/modules/auth/register/form/use-form-schema'
import {useSubmit} from '@/modules/auth/register/form/use-submit'

interface IFormData {
	property: keyof TOutputFormSchema
	placeholder: string
	type: HTMLInputTypeAttribute
	autocomplete: HTMLInputElement['autocomplete']
}

export const useForm = () => {
	const formSchema = useFormSchema()
	const onSubmit = useSubmit(formSchema)

	const formData: IFormData[] = [
		{property: 'full_name', placeholder: 'Troy Walker', type: 'text', autocomplete: 'name'},
		{property: 'username', placeholder: 'fernstalk', type: 'text', autocomplete: 'username'},
		{property: 'password', placeholder: '123456', type: 'password', autocomplete: 'new-password'},
		{
			property: 'repeat_password',
			placeholder: '123456',
			type: 'password',
			autocomplete: 'new-password'
		}
	]

	const form = useReactForm<TOutputFormSchema>({
		resolver: valibotResolver(formSchema),
		defaultValues: {
			full_name: '',
			username: '',
			password: '',
			repeat_password: ''
		}
	})

	return {formData, form, onSubmit}
}
