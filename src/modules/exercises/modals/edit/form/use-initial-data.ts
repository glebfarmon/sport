import {useEffect} from 'react'
import type {UseFormReset} from 'react-hook-form'
import type {IExercise} from '@/models/api'
import type {TOutputFormSchema} from '@/modules/exercises/modals/edit/form/use-form-schema'

export const useInitialData = (exercise: IExercise, reset: UseFormReset<TOutputFormSchema>) => {
	useEffect(() => {
		reset({
			id: exercise.id,
			name: exercise.name,
			bodyParts: exercise.bodyParts.map(bodyPart => ({value: bodyPart})),
			description: exercise.description ?? '',
			image: undefined,
			videoUrl: exercise.videoUrl ?? ''
		})
	}, [])
}
