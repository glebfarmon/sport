import {Skeleton} from '@/components/ui/skeleton'

export const PaginationSkeleton = () => {
	return (
		<div className={'mx-auto flex w-full flex-row items-center justify-center gap-1'}>
			<Skeleton className={'size-[40px] sm:w-[100px]'} />
			<Skeleton className={'size-[40px]'} />
			<Skeleton className={'size-[40px]'} />
			<Skeleton className={'size-[40px]'} />
			<Skeleton className={'size-[40px] sm:w-[100px]'} />
		</div>
	)
}
