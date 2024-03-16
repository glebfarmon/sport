import {object, Output, string} from 'valibot'

export const useFormSchema = () => {
	return object({
		theme: string(),
		language: string()
	})
}

export type TFormSchema = ReturnType<typeof useFormSchema>
export type TOutputFormSchema = Output<TFormSchema>
