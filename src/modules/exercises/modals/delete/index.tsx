'use client'

import {useTranslations} from 'next-intl'
import {Button} from '@/components/ui/button'
import {DialogDescription, DialogFooter, DialogHeader, DialogTitle} from '@/components/ui/dialog'
import {toast} from '@/components/ui/use-toast'
import type {IExercise} from '@/models/api'
import {useDeleteExerciseMutation} from '@/store/api/exercise.api'
import {setModal} from '@/store/slices/exercise.slice'
import {useAppDispatch} from '@/hooks'

const DeleteModal = ({exercise}: {exercise: IExercise}) => {
	const t = useTranslations('Exercises.Form.Delete')
	const dispatch = useAppDispatch()
	const [deleteExercise, {isLoading}] = useDeleteExerciseMutation()

	return (
		<>
			<DialogHeader>
				<DialogTitle>{t('title')}</DialogTitle>
				<DialogDescription>{t('description', {property: exercise.name})}</DialogDescription>
			</DialogHeader>
			<DialogFooter>
				<Button
					variant={'secondary'}
					onClick={() => dispatch(setModal({action: null}))}
					loader={true}
					disabled={isLoading}>
					{t('cancel')}
				</Button>
				<Button
					onClick={() =>
						deleteExercise(exercise.id)
							.unwrap()
							.then(() => {
								toast({description: t('success')})
								dispatch(setModal({action: null}))
							})
					}
					loader={true}
					disabled={isLoading}>
					{t('action')}
				</Button>
			</DialogFooter>
		</>
	)
}

export default DeleteModal
