'use client'

import {Dialog, DialogContent} from '@/components/ui/dialog'
import {setModal} from '@/store/slices/exercise.slice'
import {useAppDispatch, useAppSelector} from '@/hooks'
import {CreateModal, DeleteModal, EditModal} from '@/modules/exercises/modals/dynamic-impors'

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
