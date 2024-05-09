import {valibotResolver} from '@hookform/resolvers/valibot'
import type {DetailedHTMLProps} from 'react'
import {useForm as useReactForm} from 'react-hook-form'
import {TOutputFormSchema, useFormSchema} from '@/modules/auth/login/form/use-form-schema'
import {useSubmit} from '@/modules/auth/login/form/use-submit'

interface IFormData {
	property: keyof TOutputFormSchema
	properties: DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
}

const formData: IFormData[] = [
	{
		property: 'username',
		properties: {placeholder: 'fernstalk', type: 'text', autoComplete: 'username'}
	},
	{
		property: 'password',
		properties: {placeholder: '123456', type: 'password', autoComplete: 'new-password'}
	}
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
