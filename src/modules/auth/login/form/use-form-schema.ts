import {useTranslations} from 'next-intl'
import {z} from 'zod'

export const useFormSchema = () => {
	const [t, e] = [useTranslations('Auth'), useTranslations('Errors')]
	return z.object({
		username: z
			.string()
			.min(2, {
				message: e('min_length', {property: t('Form.username'), count: 2})
			})
			.max(32, {
				message: e('max_length', {property: t('Form.username'), count: 32})
			}),
		password: z
			.string()
			.min(6, {
				message: e('min_length', {property: t('Form.password'), count: 6})
			})
			.max(64, {
				message: e('max_length', {property: t('Form.password'), count: 64})
			})
	})
}
