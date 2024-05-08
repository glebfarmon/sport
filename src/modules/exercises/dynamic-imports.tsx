import dynamic from 'next/dynamic'
import {PaginationSkeleton} from '@/components/pagination/skeleton'
import {CreateButtonSkeleton} from '@/modules/exercises/create-button/skeleton'
import {SearchSkeleton} from '@/modules/exercises/search/skeleton'

export const Search = dynamic(() => import('@/modules/exercises/search'), {
	ssr: true,
	loading: () => <SearchSkeleton />
})

export const CreateButton = dynamic(() => import('@/modules/exercises/create-button'), {
	ssr: false,
	loading: () => <CreateButtonSkeleton />
})

export const Modal = dynamic(() => import('@/modules/exercises/modals'), {
	ssr: false
})

export const PaginationContainer = dynamic(() => import('@/modules/exercises/pagination-container'), {
	ssr: false,
	loading: () => <PaginationSkeleton />
})