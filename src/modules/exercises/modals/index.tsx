'use client'

import dynamic from 'next/dynamic'
import {Dialog, DialogContent} from '@/components/ui/dialog'
import type {TExerciseModal} from '@/models'
import LoadEditModal from '@/modules/exercises/modals/edit/load'

const EditModal = dynamic(() => import('@/modules/exercises/modals/edit'), {
	ssr: false,
	loading: () => <LoadEditModal />
})

export const Modal = ({
	modal,
	setModal
}: {
	modal: TExerciseModal
	setModal: (state: TExerciseModal) => void
}) => {
	return (
		<Dialog
			open={!!modal.action}
			onOpenChange={() => setModal({action: null})}>
			<DialogContent className={'sm:max-w-[425px]'}>
				{modal.action === 'edit' && modal.exercise && <EditModal exercise={modal.exercise} />}
			</DialogContent>
		</Dialog>
	)
}
