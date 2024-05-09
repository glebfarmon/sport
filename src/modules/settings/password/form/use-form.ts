import {valibotResolver} from '@hookform/resolvers/valibot'
import type {DetailedHTMLProps} from 'react'
import {useForm as useReactForm} from 'react-hook-form'
import {
	type TOutputFormSchema,
	useFormSchema
} from '@/modules/settings/password/form/use-form-schema'
import {useSubmit} from '@/modules/settings/password/form/use-submit'

interface IFormData {
	property: keyof TOutputFormSchema
	properties: DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
}

const formData: IFormData[] = [
	{
		property: 'password',
		properties: {placeholder: '123456', type: 'password', autoComplete: 'current-password'}
	},
	{
		property: 'password_new',
		properties: {placeholder: '123456', type: 'password', autoComplete: 'new-password'}
	}
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
