import {useTranslations} from 'next-intl'
import {maxLength, minLength, object, Output, regex, string} from 'valibot'

export const useFormSchema = () => {
	const t = useTranslations()

	return object({
		full_name: string([
			minLength(3, t('Errors.min_length', {property: t('Auth.Form.full_name'), count: 3})),
			maxLength(48, t('Errors.max_length', {property: t('Auth.Form.full_name'), count: 48})),
			regex(
				/^[a-zA-ZÀ-ÖØ-öø-ÿĀ-žĄ-Žą-ž]+[-'s]?[a-zA-ZÀ-ÖØ-öø-ÿĀ-žĄ-Žą-ž ]+$/,
				t('Errors.alphabets', {property: t('Auth.Form.full_name')})
			),
			regex(
				/^[A-ZÀ-ÖØ-ÝĀ-ŽĄ-Ž][a-zà-öø-ÿĀ-žĄ-Žą-ž]+\s+[A-ZÀ-ÖØ-ÝĀ-ŽĄ-Ž][a-zà-öø-ÿĀ-žĄ-Žą-ž]+$/,
				t('Errors.full_name')
			)
		]),
		username: string([
			minLength(2, t('Errors.min_length', {property: t('Auth.Form.username'), count: 2})),
			maxLength(32, t('Errors.max_length', {property: t('Auth.Form.username'), count: 32})),
			regex(/^[a-zA-Z0-9_.-]+$/, t('Errors.strict'))
		]),
		password: string([
			minLength(6, t('Errors.min_length', {property: t('Auth.Form.password'), count: 6})),
			maxLength(64, t('Errors.max_length', {property: t('Auth.Form.password'), count: 64}))
		])
	})
}

export type TFormSchema = ReturnType<typeof useFormSchema>
export type TOutputFormSchema = Output<TFormSchema>
