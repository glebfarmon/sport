'use client'

import {DialogFooter, DialogHeader} from '@/components/ui/dialog'
import type {IExercise} from '@/models/api'

const InfoModal = ({exercise}: {exercise: IExercise}) => {
	console.log(exercise)
	return (
		<>
			<DialogHeader>123</DialogHeader>
			<div className={'grid gap-4 py-4'}>123</div>
			<DialogFooter>123</DialogFooter>
		</>
	)
}

export default InfoModal
