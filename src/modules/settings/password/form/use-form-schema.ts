import {useTranslations} from 'next-intl'
import {maxLength, minLength, object, Output, string} from 'valibot'

export const useFormSchema = () => {
	const t = useTranslations()

	return object({
		password: string([
			minLength(6, t('Errors.min_length', {property: t('Auth.Form.password'), count: 6})),
			maxLength(64, t('Errors.max_length', {property: t('Auth.Form.password'), count: 64}))
		]),
		password_new: string([
			minLength(6, t('Errors.min_length', {property: t('Auth.Form.password'), count: 6})),
			maxLength(64, t('Errors.max_length', {property: t('Auth.Form.password'), count: 64}))
		])
	})
}

export type TFormSchema = ReturnType<typeof useFormSchema>
export type TOutputFormSchema = Output<TFormSchema>
