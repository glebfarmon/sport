'use client'

import {Dialog, DialogContent} from '@/components/ui/dialog'
import {setModal} from '@/store/slices/exercise.slice'
import {useAppDispatch, useAppSelector} from '@/hooks'
import {
	CreateModal,
	DeleteModal,
	EditModal,
	InfoModal
} from '@/modules/exercises/modals/dynamic-imports'

const Modal = () => {
	const modal = useAppSelector(state => state.exercise.modal)
	const dispatch = useAppDispatch()

	return (
		<Dialog
			open={!!modal.action}
			onOpenChange={() => dispatch(setModal({action: null}))}>
			<DialogContent className={'sm:max-w-[425px]'}>
				{modal.action !== null &&
					{
						info: modal.action === 'info' && <InfoModal />,
						create: modal.action === 'create' && <CreateModal />,
						edit: modal.action === 'edit' && modal.exercise && (
							<EditModal exercise={modal.exercise} />
						),
						delete: modal.action === 'delete' && modal.exercise && (
							<DeleteModal exercise={modal.exercise} />
						)
					}[modal.action]}
			</DialogContent>
		</Dialog>
	)
}

export default Modal
