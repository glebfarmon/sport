import {valibotResolver} from '@hookform/resolvers/valibot'
import type {DetailedHTMLProps} from 'react'
import {useForm as useReactForm} from 'react-hook-form'
import {TOutputFormSchema, useFormSchema} from '@/modules/auth/register/form/use-form-schema'
import {useSubmit} from '@/modules/auth/register/form/use-submit'

interface IFormData {
	property: keyof TOutputFormSchema
	properties: DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
}

const formData: IFormData[] = [
	{
		property: 'full_name',
		properties: {placeholder: 'Troy Walker', type: 'text', autoComplete: 'name'}
	},
	{
		property: 'username',
		properties: {placeholder: 'fernstalk', type: 'text', autoComplete: 'username'}
	},
	{
		property: 'password',
		properties: {placeholder: '123456', type: 'password', autoComplete: 'new-password'}
	},
	{
		property: 'repeat_password',
		properties: {
			property: 'repeat_password',
			placeholder: '123456',
			type: 'password',
			autoComplete: 'new-password'
		}
	}
]

export const useForm = () => {
	const formSchema = useFormSchema()
	const onSubmit = useSubmit(formSchema)

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
