import {Skeleton} from '@/components/ui/skeleton'

export const PaginationSkeleton = () => {
	return (
		<div className={'mx-auto flex w-full justify-center flex-row items-center gap-1'}>
			<Skeleton className={'h-[40px] w-[40px] sm:w-[100px]'} />
			<Skeleton className={'h-[40px] w-[40px]'} />
			<Skeleton className={'h-[40px] w-[40px]'} />
			<Skeleton className={'h-[40px] w-[40px]'} />
			<Skeleton className={'h-[40px] w-[40px] sm:w-[100px]'} />
		</div>
	)
}
