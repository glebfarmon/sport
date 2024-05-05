import {valibotResolver} from '@hookform/resolvers/valibot'
import type {DetailedHTMLProps, InputHTMLAttributes, TextareaHTMLAttributes} from 'react'
import {useForm as useReactForm} from 'react-hook-form'
import {
	type TOutputFormSchema,
	useFormSchema
} from '@/modules/exercises/modals/edit/form/use-form-schema'
import {useSubmit} from '@/modules/exercises/modals/edit/form/use-submit'

export type TFormData = {
	property: keyof TOutputFormSchema
} & (
	| {
			type: 'input' | 'file'
			properties: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
	  }
	| {
			type: 'textarea'
			properties: DetailedHTMLProps<
				TextareaHTMLAttributes<HTMLTextAreaElement>,
				HTMLTextAreaElement
			>
	  }
)

const formData: TFormData[] = [
	{
		property: 'name',
		properties: {placeholder: 'Squats', type: 'text'},
		type: 'input'
	},
	{
		property: 'bodyPart',
		properties: {placeholder: 'Legs', type: 'text'},
		type: 'input'
	},
	{
		property: 'description',
		properties: {
			placeholder:
				'Stand with feet shoulder-width apart, keeping your back straight and chest up. Lower your body by bending your knees and pushing your hips back...'
		},
		type: 'textarea'
	},
	{
		property: 'image',
		properties: {accept: 'image/svg+xml', type: 'file'},
		type: 'file'
	},
	{
		property: 'videoUrl',
		properties: {placeholder: 'https://youtube.com/watch?v=mgSc_NhVQU8', type: 'text'},
		type: 'input'
	}
]

export const useForm = () => {
	const formSchema = useFormSchema()
	const onSubmit = useSubmit(formSchema)

	const form = useReactForm<TOutputFormSchema>({
		resolver: valibotResolver(formSchema),
		defaultValues: {
			name: '',
			bodyPart: '',
			description: '',
			image: undefined,
			videoUrl: ''
		}
	})

	return {form, onSubmit, formData}
}
