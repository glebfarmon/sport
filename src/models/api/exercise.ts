export interface IExercise<T = string> {
	id: string
	name: string
	bodyPart: string
	description?: string
	image: T
	videoUrl?: string
	isPublic: boolean
	editable: boolean
}
