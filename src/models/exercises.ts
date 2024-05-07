import type {IExercise} from '@/models/api'

export type TExerciseModal =
	| {action: null}
	| {action: 'info'}
	| {action: 'create'}
	| {action: 'edit'; exercise: IExercise}
	| {action: 'delete'; exercise: IExercise}
