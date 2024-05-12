import {valibotResolver} from '@hookform/resolvers/valibot'
import {useForm as useReactForm} from 'react-hook-form'
import {
	type TOutputFormSchema,
	useFormSchema
} from '@/modules/exercises/modals/create/form/use-form-schema'
import {useSubmit} from '@/modules/exercises/modals/create/form/use-submit'

export const useForm = () => {
	const formSchema = useFormSchema()
	const onSubmit = useSubmit(formSchema)

	const form = useReactForm<TOutputFormSchema>({
		resolver: valibotResolver(formSchema),
		defaultValues: {
			name: '',
			bodyParts: [{value: undefined}],
			description: '',
			image: undefined,
			videoUrl: '',
			isPublic: true
		}
	})

	return {form, onSubmit}
}
