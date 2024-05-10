import {useTranslations} from 'next-intl'
import {
	array,
	enum_,
	instance,
	maxLength,
	maxSize,
	mimeType,
	minLength,
	object,
	optional,
	Output,
	string,
	url
} from 'valibot'
import {bodyPart} from '@/models/api'

export const useFormSchema = () => {
	const t = useTranslations()

	return object({
		id: string(),
		name: string([
			minLength(2, t('Errors.min_length', {property: t('Exercises.Form.name'), count: 2})),
			maxLength(25, t('Errors.max_length', {property: t('Exercises.Form.name'), count: 25}))
		]),
		bodyParts: array(object({value: enum_(bodyPart, t('Exercises.BodyParts.choose'))}), [
			minLength(1),
			maxLength(4)
		]),
		description: string([
			maxLength(
				1500,
				t('Errors.max_length', {property: t('Exercises.Form.description'), count: 1500})
			)
		]),
		image: optional(
			instance(File, t('Errors.image_required'), [
				mimeType(['image/svg+xml', 'image/gif'], t('Errors.image_type', {property: 'SVG'})),
				maxSize(1024 * 1024, t('Errors.image_max_size', {property: '1 MB'}))
			])
		),
		videoUrl: string([
			url(t('Errors.url')),
			maxLength(125, t('Errors.max_length', {property: t('Exercises.Form.videoUrl'), count: 125}))
		])
	})
}

export type TFormSchema = ReturnType<typeof useFormSchema>
export type TOutputFormSchema = Output<TFormSchema>
