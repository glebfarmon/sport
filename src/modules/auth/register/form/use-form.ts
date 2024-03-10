import {zodResolver} from '@hookform/resolvers/zod'
import {HTMLInputTypeAttribute} from 'react'
import {useForm as useReactForm} from 'react-hook-form'
import {z} from 'zod'
import {useFormSchema} from './use-form-schema'
import {useSubmit} from './use-submit'

interface IFormData<T> {
	property: T
	placeholder: string
	type: HTMLInputTypeAttribute
	autocomplete: HTMLInputElement['autocomplete']
}

export const useForm = () => {
	const formSchema = useFormSchema()
	const onSubmit = useSubmit(formSchema)

	const formData: IFormData<keyof z.infer<typeof formSchema>>[] = [
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

	const form = useReactForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			full_name: '',
			username: '',
			password: '',
			repeat_password: ''
		}
	})

	return {formData, form, onSubmit}
}
