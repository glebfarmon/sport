import dynamic from 'next/dynamic'
import {CreateModalSkeleton} from '@/modules/exercises/modals/create/skeleton'
import {DeleteModalSkeleton} from '@/modules/exercises/modals/delete/skeleton'
import {EditModalSkeleton} from '@/modules/exercises/modals/edit/skeleton'
import {InfoModalSkeleton} from '@/modules/exercises/modals/info/skeleton'

export const InfoModal = dynamic(() => import('@/modules/exercises/modals/info'), {
	ssr: false,
	loading: () => <InfoModalSkeleton />
})

export const CreateModal = dynamic(() => import('@/modules/exercises/modals/create'), {
	ssr: false,
	loading: () => <CreateModalSkeleton />
})

export const EditModal = dynamic(() => import('@/modules/exercises/modals/edit'), {
	ssr: false,
	loading: () => <EditModalSkeleton />
})

export const DeleteModal = dynamic(() => import('@/modules/exercises/modals/delete'), {
	ssr: false,
	loading: () => <DeleteModalSkeleton />
})
