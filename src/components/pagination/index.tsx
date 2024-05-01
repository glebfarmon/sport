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
import type {IPaginationMeta, IPaginationSetParams} from '@/models/api'

interface IPagination extends IPaginationSetParams {
	meta: IPaginationMeta
}

export const Pagination = memo(({meta, setParams}: IPagination) => {
	const setPage = useCallback((page: number | null) => {
		return () => setParams(prev => ({...prev, page: page ?? 1}))
	}, [])

	return (
		<PaginationContainer>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious
						disabled={!!!meta.prev}
						onClick={setPage(meta.prev)}
					/>
				</PaginationItem>
				{meta.currentPage - 2 > 0 ? (
					<>
						<PaginationItem>
							<PaginationButton onClick={setPage(1)}>1</PaginationButton>
						</PaginationItem>
						<PaginationItem>
							<PaginationEllipsis />
						</PaginationItem>
						<PaginationItem>
							<PaginationButton onClick={setPage(meta.currentPage - 1)}>
								{meta.currentPage - 1}
							</PaginationButton>
						</PaginationItem>
					</>
				) : (
					meta.prev && (
						<PaginationItem>
							<PaginationButton onClick={setPage(meta.currentPage - 1)}>
								{meta.currentPage - 1}
							</PaginationButton>
						</PaginationItem>
					)
				)}
				<PaginationItem>
					<PaginationButton
						onClick={setPage(meta.currentPage)}
						isActive>
						{meta.currentPage}
					</PaginationButton>
				</PaginationItem>
				{meta.currentPage + 2 <= meta.lastPage ? (
					<>
						<PaginationItem>
							<PaginationButton onClick={setPage(meta.currentPage + 1)}>
								{meta.currentPage + 1}
							</PaginationButton>
						</PaginationItem>
						<PaginationItem>
							<PaginationEllipsis />
						</PaginationItem>
						<PaginationItem>
							<PaginationButton onClick={setPage(meta.lastPage)}>{meta.lastPage}</PaginationButton>
						</PaginationItem>
					</>
				) : (
					meta.next && (
						<PaginationItem>
							<PaginationButton onClick={setPage(meta.lastPage)}>{meta.lastPage}</PaginationButton>
						</PaginationItem>
					)
				)}
				<PaginationItem>
					<PaginationNext
						disabled={!!!meta.next}
						onClick={() => setParams(prev => ({...prev, page: meta.next ?? 1}))}
					/>
				</PaginationItem>
			</PaginationContent>
		</PaginationContainer>
	)
})
