import {Skeleton} from '@/components/ui/skeleton'

export const RecordsSkeleton = () => {
	return (
		<div className={'flex flex-col gap-2 rounded-lg border-2 border-dotted p-3 transition-colors'}>
			<Skeleton className={'h-[20px] w-[70px]'} />
			<Skeleton className={'h-[15px] w-[50px]'} />
			<Skeleton className={'h-[110px]'} />
		</div>
	)
}
