import {valibotResolver} from '@hookform/resolvers/valibot'
import {useForm as useReactForm} from 'react-hook-form'
import {TOutputFormSchema, useFormSchema} from '@/modules/auth/login/form/use-form-schema'
import {useSubmit} from '@/modules/auth/login/form/use-submit'

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

	return {form, onSubmit}
}
