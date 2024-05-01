'use client'

import dynamic from 'next/dynamic'
import {Dialog, DialogContent} from '@/components/ui/dialog'
import {exerciseActions} from '@/store/slices/exercise.slice'
import {useAppDispatch, useAppSelector} from '@/hooks'
import LoadEditModal from '@/modules/exercises/modals/edit/load'

const Modal = () => {
	const {modal} = useAppSelector(state => state.exercise)
	const dispatch = useAppDispatch()

	return (
		<Dialog
			open={!!modal.action}
			onOpenChange={() => dispatch(exerciseActions.setModal({action: null}))}>
			<DialogContent className={'sm:max-w-[425px]'}>
				{modal.action === 'edit' && modal.exercise && <EditModal exercise={modal.exercise} />}
			</DialogContent>
		</Dialog>
	)
}

export default Modal

const EditModal = dynamic(() => import('@/modules/exercises/modals/edit'), {
	ssr: false,
	loading: () => <LoadEditModal />
})
