import {valibotResolver} from '@hookform/resolvers/valibot'
import type {DetailedHTMLProps} from 'react'
import {useForm as useReactForm} from 'react-hook-form'
import {
	type TOutputFormSchema,
	useFormSchema
} from '@/modules/settings/account/form/use-form-schema'
import {useSubmit} from '@/modules/settings/account/form/use-submit'

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
		properties: {placeholder: '123456', type: 'password', autoComplete: 'current-password'}
	}
]

export const useForm = () => {
	const formSchema = useFormSchema()

	const form = useReactForm<TOutputFormSchema>({
		resolver: valibotResolver(formSchema),
		defaultValues: {
			full_name: '',
			username: '',
			password: ''
		}
	})
	const onSubmit = useSubmit(formSchema, form.resetField)

	return {formData, form, onSubmit}
}
