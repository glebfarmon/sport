import {valibotResolver} from '@hookform/resolvers/valibot'
import {useForm as useReactForm} from 'react-hook-form'
import {
	type TOutputFormSchema,
	useFormSchema
} from '@/modules/settings/password/form/use-form-schema'
import {useSubmit} from '@/modules/settings/password/form/use-submit'

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

	return {form, onSubmit}
}
