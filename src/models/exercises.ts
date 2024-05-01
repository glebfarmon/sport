import type {IExercise} from '@/models/api'

export type TExercisesActions = 'add' | 'edit' | 'delete'

export interface IExercisesProps {
	id: number | undefined
	action: TExercisesActions
}

export type TExerciseModal =
	| {action: null}
	| {action: 'create'}
	| {action: 'edit'; exercise: IExercise}
	| {action: 'delete'; exercise: IExercise}
