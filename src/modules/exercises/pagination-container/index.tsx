import {useCallback} from 'react'
import {PaginationSkeleton} from '@/components/pagination/skeleton'
import {useGetExercisesQuery} from '@/store/api/exercise.api'
import {setPage as setStorePage} from '@/store/slices/exercise.slice'
import {useAppDispatch, useAppSelector} from '@/hooks/use-redux'
import {Pagination} from '@/modules/exercises/dynamic-loaded'

export const PaginationContainer = () => {
	const dispatch = useAppDispatch()
	const page = useAppSelector(state => state.exercise.page)
	const search = useAppSelector(state => state.exercise.search)

	const meta = useGetExercisesQuery({page, search}).data?.meta

	const setPage = useCallback((page: number) => {
		return () => dispatch(setStorePage(page))
	}, [])

	if (!meta) return <PaginationSkeleton />

	return (
		<Pagination
			page={page}
			setPage={setPage}
			lastPage={meta?.lastPage || 1}
		/>
	)
}
