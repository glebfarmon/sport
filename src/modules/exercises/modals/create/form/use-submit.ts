import {useTranslations} from 'next-intl'
import {useCallback} from 'react'
import {toast} from '@/components/ui/use-toast'
import {useCreateExerciseMutation} from '@/store/api/exercise.api'
import {setModal} from '@/store/slices/exercise.slice'
import {useAppDispatch} from '@/hooks/use-redux'
import type {
	TFormSchema,
	TOutputFormSchema
} from '@/modules/exercises/modals/create/form/use-form-schema'

export const useSubmit = (formSchema: TFormSchema) => {
	const t = useTranslations('Exercises.Form.Create')
	const [createExercise] = useCreateExerciseMutation()
	const dispatch = useAppDispatch()

	return useCallback(
		async (data: TOutputFormSchema) => {
			await createExercise(data)
				.unwrap()
				.then(() => {
					toast({description: t('success')})
					dispatch(setModal({action: null}))
				})
		},
		[formSchema]
	)
}