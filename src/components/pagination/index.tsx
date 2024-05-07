'use client'

import {useTranslations} from 'next-intl'
import {memo, type MouseEventHandler} from 'react'
import {
	PaginationButton,
	Pagination as PaginationContainer,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationNext,
	PaginationPrevious
} from '@/components/ui/pagination'

interface IPagination {
	page: number
	lastPage: number
	setPage: (e: number) => MouseEventHandler<HTMLButtonElement> | undefined
}

const Pagination = memo(({page, setPage, lastPage}: IPagination) => {
	const t = useTranslations('Pagination')
	return (
		<PaginationContainer>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious
						aria-label={t('prev')}
						disabled={page - 1 <= 0}
						onClick={setPage(page - 1)}>
						{t('prev')}
					</PaginationPrevious>
				</PaginationItem>
				{page - 2 > 0 ? (
					<>
						<PaginationItem>
							<PaginationButton
								key={1}
								onClick={setPage(1)}>
								1
							</PaginationButton>
						</PaginationItem>
						<PaginationItem>
							<PaginationEllipsis />
						</PaginationItem>
						<PaginationItem>
							<PaginationButton
								key={page - 1}
								onClick={setPage(page - 1)}>
								{page - 1}
							</PaginationButton>
						</PaginationItem>
					</>
				) : (
					page - 1 > 0 && (
						<PaginationItem>
							<PaginationButton
								key={page - 1}
								onClick={setPage(page - 1)}>
								{page - 1}
							</PaginationButton>
						</PaginationItem>
					)
				)}
				<PaginationItem>
					<PaginationButton
						key={page}
						isActive>
						{page}
					</PaginationButton>
				</PaginationItem>
				{page + 2 <= lastPage ? (
					<>
						<PaginationItem>
							<PaginationButton
								key={page + 1}
								onClick={setPage(page + 1)}>
								{page + 1}
							</PaginationButton>
						</PaginationItem>
						<PaginationItem>
							<PaginationEllipsis />
						</PaginationItem>
						<PaginationItem>
							<PaginationButton
								key={lastPage}
								onClick={setPage(lastPage)}>
								{lastPage}
							</PaginationButton>
						</PaginationItem>
					</>
				) : (
					page + 1 <= lastPage && (
						<PaginationItem>
							<PaginationButton
								key={lastPage}
								onClick={setPage(lastPage)}>
								{lastPage}
							</PaginationButton>
						</PaginationItem>
					)
				)}
				<PaginationItem>
					<PaginationNext
						aria-label={t('next')}
						disabled={page + 1 > lastPage}
						onClick={setPage(page + 1)}>
						{t('next')}
					</PaginationNext>
				</PaginationItem>
			</PaginationContent>
		</PaginationContainer>
	)
})

export default Pagination
