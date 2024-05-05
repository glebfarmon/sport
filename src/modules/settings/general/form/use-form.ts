import {valibotResolver} from '@hookform/resolvers/valibot'
import {useLocale} from 'next-intl'
import {useTheme} from 'next-themes'
import {useForm as useReactForm} from 'react-hook-form'
import {LOCALES} from '@/constants/locales'
import {usePathname, useRouter} from '@/hooks/use-navigation'
import {
	type TOutputFormSchema,
	useFormSchema
} from '@/modules/settings/general/form/use-form-schema'

interface IFormData {
	property: keyof TOutputFormSchema
	content: string[]
	func: (arg: string) => void
}

export const useForm = () => {
	const formSchema = useFormSchema()
	const {theme, themes, setTheme} = useTheme()
	const locale = useLocale()
	const router = useRouter()
	const pathname = usePathname()

	const formData: IFormData[] = [
		{
			property: 'theme',
			content: themes,
			func: (theme: string) => setTheme(theme)
		},
		{
			property: 'language',
			content: LOCALES,
			func: (locale: string) => router.replace(pathname, {locale})
		}
	]

	const form = useReactForm<TOutputFormSchema>({
		resolver: valibotResolver(formSchema),
		defaultValues: {
			theme: theme || themes[0],
			language: locale
		}
	})

	return {form, formData}
}
