'use client'

import {Button} from '@/components/ui/button'
import {DialogDescription, DialogFooter, DialogHeader, DialogTitle} from '@/components/ui/dialog'

const LoadEditModal = () => {
	return (
		<>
			<DialogHeader>
				<DialogTitle>Loading...</DialogTitle>
				<DialogDescription>Loading...</DialogDescription>
			</DialogHeader>
			<div className='grid gap-4 py-4'>
				<div className='grid grid-cols-4 items-center gap-4'>Loading...</div>
				<div className='grid grid-cols-4 items-center gap-4'>Loading...</div>
			</div>
			<DialogFooter>
				<Button>Loading...</Button>
			</DialogFooter>
		</>
	)
}

export default LoadEditModal
