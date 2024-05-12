import {valibotResolver} from '@hookform/resolvers/valibot'
import {useForm as useReactForm} from 'react-hook-form'
import {
	type TOutputFormSchema,
	useFormSchema
} from '@/modules/settings/account/form/use-form-schema'
import {useSubmit} from '@/modules/settings/account/form/use-submit'

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

	return {form, onSubmit}
}
