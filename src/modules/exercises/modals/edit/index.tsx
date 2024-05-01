'use client'

import {Label} from '@radix-ui/react-label'
import {Button} from '@/components/ui/button'
import {DialogDescription, DialogFooter, DialogHeader, DialogTitle} from '@/components/ui/dialog'
import {Input} from '@/components/ui/input'
import type {IExercise} from '@/models/api'

const EditModal = ({exercise}: {exercise: IExercise}) => {
	return (
		<>
			<DialogHeader>
				<DialogTitle>Edit exercise</DialogTitle>
				<DialogDescription>
					Make changes to your exercise here. Click save when you&apos;re done.
				</DialogDescription>
			</DialogHeader>
			<div className='grid gap-4 py-4'>
				<div className='grid grid-cols-4 items-center gap-4'>
					<Label
						htmlFor='name'
						className='text-right'>
						Name
					</Label>
					<Input
						id='name'
						value='Pedro Duarte'
						className='col-span-3'
						readOnly
						autoFocus
					/>
				</div>
				<div className='grid grid-cols-4 items-center gap-4'>
					<Label
						htmlFor='username'
						className='text-right'>
						Username
					</Label>
					<Input
						id='username'
						value='@peduarte'
						className='col-span-3'
						readOnly
					/>
				</div>
			</div>
			<DialogFooter>
				<Button type={'submit'}>Save changes</Button>
			</DialogFooter>
		</>
	)
}

export default EditModal
