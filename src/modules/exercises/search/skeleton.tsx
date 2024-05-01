import {Skeleton} from '@/components/ui/skeleton'

export const SearchSkeleton = () => {
	return (
		<div className={'flex w-full h-10 rounded-md border border-input items-center px-3'}>
			<Skeleton className={'w-14 h-4'} />
		</div>
	)
}
