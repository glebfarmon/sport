import {valibotResolver} from '@hookform/resolvers/valibot'
import {useForm as useReactForm} from 'react-hook-form'
import {TOutputFormSchema, useFormSchema} from '@/modules/auth/register/form/use-form-schema'
import {useSubmit} from '@/modules/auth/register/form/use-submit'

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

	return {form, onSubmit}
}
