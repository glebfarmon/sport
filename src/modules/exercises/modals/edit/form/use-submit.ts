import {useTranslations} from 'next-intl'
import {useCallback} from 'react'
import {toast} from '@/components/ui/use-toast'
import {useUpdateExerciseMutation} from '@/store/api/exercise.api'
import {closeModal} from '@/store/slices/exercise.slice'
import {useAppDispatch} from '@/hooks/use-redux'
import type {
	TFormSchema,
	TOutputFormSchema
} from '@/modules/exercises/modals/edit/form/use-form-schema'

export const useSubmit = (formSchema: TFormSchema) => {
	const t = useTranslations('Exercises.Form.Edit')
	const [updateExercise] = useUpdateExerciseMutation()
	const dispatch = useAppDispatch()

	return useCallback(
		async (data: TOutputFormSchema) => {
			const bodyParts = data.bodyParts.map(({value}) => value)
			await updateExercise({...data, bodyParts})
				.unwrap()
				.then(() => {
					toast({description: t('success')})
					dispatch(closeModal())
				})
		},
		[formSchema]
	)
}
