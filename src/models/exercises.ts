import type {IExercise} from '@/models/api'

export type TExerciseModal =
	| {action: null}
	| {action: 'create'}
	| {action: 'info'; exercise: IExercise}
	| {action: 'edit'; exercise: IExercise}
	| {action: 'delete'; exercise: IExercise}
