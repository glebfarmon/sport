import {useTranslations} from 'next-intl'
import {z} from 'zod'

export const useFormSchema = () => {
	const [t, e] = [useTranslations('Auth'), useTranslations('Errors')]
	return z
		.object({
			full_name: z
				.string()
				.min(3, {
					message: e('min_length', {property: t('Form.full_name'), count: 3})
				})
				.max(48, {
					message: e('max_length', {property: t('Form.full_name'), count: 48})
				})
				.refine(
					value => /^[a-zA-ZÀ-ÖØ-öø-ÿĀ-žĄ-Žą-ž]+[-'s]?[a-zA-ZÀ-ÖØ-öø-ÿĀ-žĄ-Žą-ž ]+$/.test(value),
					e('alphabets', {property: t('Form.full_name')})
				)
				.refine(
					value =>
						/^[A-ZÀ-ÖØ-ÝĀ-ŽĄ-Ž][a-zà-öø-ÿĀ-žĄ-Žą-ž]+\s+[A-ZÀ-ÖØ-ÝĀ-ŽĄ-Ž][a-zà-öø-ÿĀ-žĄ-Žą-ž]+$/.test(
							value
						),
					e('full_name')
				),
			username: z
				.string()
				.min(2, {
					message: e('min_length', {property: t('Form.username'), count: 2})
				})
				.max(32, {
					message: e('max_length', {property: t('Form.username'), count: 32})
				})
				.refine(value => /^[a-zA-Z0-9_.-]+$/.test(value), e('strict')),
			password: z
				.string()
				.min(6, {
					message: e('min_length', {property: t('Form.password'), count: 6})
				})
				.max(64, {
					message: e('max_length', {property: t('Form.password'), count: 64})
				}),
			repeat_password: z.string()
		})
		.refine(data => data.password === data.repeat_password, {
			message: e('not_matching', {property: t('Form.passwords')}),
			path: ['repeat_password']
		})
}
