import {valibotResolver} from '@hookform/resolvers/valibot'
import {useLocale} from 'next-intl'
import {useTheme} from 'next-themes'
import {useForm as useReactForm} from 'react-hook-form'
import {
	type TOutputFormSchema,
	useFormSchema
} from '@/modules/settings/general/form/use-form-schema'

export const useForm = () => {
	const formSchema = useFormSchema()
	const {theme, themes} = useTheme()
	const locale = useLocale()

	const form = useReactForm<TOutputFormSchema>({
		resolver: valibotResolver(formSchema),
		defaultValues: {
			theme: theme,
			language: locale
		}
	})

	return {form}
}
