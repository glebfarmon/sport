import {useTranslations} from 'next-intl'
import {
	boolean,
	instance,
	maxLength,
	maxSize,
	mimeType,
	minLength,
	object,
	Output,
	string
} from 'valibot'

export const useFormSchema = () => {
	const t = useTranslations()

	return object({
		name: string([
			minLength(2, t('Errors.min_length', {property: t('Exercises.Form.name'), count: 2})),
			maxLength(25, t('Errors.max_length', {property: t('Exercises.Form.name'), count: 25}))
		]),
		bodyPart: string([
			minLength(2, t('Errors.min_length', {property: t('Exercises.Form.bodyPart'), count: 2})),
			maxLength(25, t('Errors.max_length', {property: t('Exercises.Form.bodyPart'), count: 25}))
		]),
		description: string([
			maxLength(
				1500,
				t('Errors.max_length', {property: t('Exercises.Form.description'), count: 1500})
			)
		]),
		image: instance(File, t('Errors.image_required'), [
			mimeType(['image/svg+xml', 'image/gif'], t('Errors.image_type', {property: 'SVG, GIF'})),
			maxSize(1024 * 1024, t('Errors.image_max_size', {property: '1 MB'}))
		]),
		videoUrl: string([
			maxLength(125, t('Errors.max_length', {property: t('Exercises.Form.videoUrl'), count: 125}))
		]),
		isPublic: boolean()
	})
}

export type TFormSchema = ReturnType<typeof useFormSchema>
export type TOutputFormSchema = Output<TFormSchema>
