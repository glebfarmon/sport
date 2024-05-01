'use client'

import {memo, useCallback} from 'react'
import {
	PaginationButton,
	Pagination as PaginationContainer,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationNext,
	PaginationPrevious
} from '@/components/ui/pagination'
import {exerciseActions} from '@/store/slices/exercise.slice'
import {useAppDispatch, useAppSelector} from '@/hooks'

const Pagination = memo(({lastPage}: {lastPage: number}) => {
	const page = useAppSelector(state => state.exercise.page)
	const dispatch = useAppDispatch()

	const setPage = useCallback((page: number) => {
		return () => dispatch(exerciseActions.setPage(page))
	}, [])

	return (
		<PaginationContainer>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious
						disabled={page - 1 <= 0}
						onClick={setPage(page - 1)}
					/>
				</PaginationItem>
				{page - 2 > 0 ? (
					<>
						<PaginationItem>
							<PaginationButton onClick={setPage(1)}>1</PaginationButton>
						</PaginationItem>
						<PaginationItem>
							<PaginationEllipsis />
						</PaginationItem>
						<PaginationItem>
							<PaginationButton onClick={setPage(page - 1)}>{page - 1}</PaginationButton>
						</PaginationItem>
					</>
				) : (
					page - 1 > 0 && (
						<PaginationItem>
							<PaginationButton onClick={setPage(page - 1)}>{page - 1}</PaginationButton>
						</PaginationItem>
					)
				)}
				<PaginationItem>
					<PaginationButton
						onClick={setPage(page)}
						isActive>
						{page}
					</PaginationButton>
				</PaginationItem>
				{page + 2 <= lastPage ? (
					<>
						<PaginationItem>
							<PaginationButton onClick={setPage(page + 1)}>{page + 1}</PaginationButton>
						</PaginationItem>
						<PaginationItem>
							<PaginationEllipsis />
						</PaginationItem>
						<PaginationItem>
							<PaginationButton onClick={setPage(lastPage)}>{lastPage}</PaginationButton>
						</PaginationItem>
					</>
				) : (
					page + 2 < lastPage && (
						<PaginationItem>
							<PaginationButton onClick={setPage(lastPage)}>{lastPage}</PaginationButton>
						</PaginationItem>
					)
				)}
				<PaginationItem>
					<PaginationNext
						disabled={page + 1 > lastPage}
						onClick={setPage(page + 1)}
					/>
				</PaginationItem>
			</PaginationContent>
		</PaginationContainer>
	)
})

export default Pagination
