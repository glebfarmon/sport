import {Skeleton} from '@/components/ui/skeleton'

export const SearchSkeleton = () => {
	return (
		<div className={'flex h-10 w-full items-center rounded-md border border-input px-3'}>
			<Skeleton className={'h-4 w-14'} />
		</div>
	)
}
