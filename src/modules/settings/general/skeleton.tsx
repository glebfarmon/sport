import {Skeleton} from '@/components/ui/skeleton'

export const GeneralSkeleton = () => {
	return (
		<div className={'w-full space-y-4 rounded-md border border-input p-6'}>
			<Skeleton className={'h-[20px] w-[80px]'} />
			<Skeleton className={'h-[40px] w-full'} />
			<Skeleton className={'h-[20px] w-[80px]'} />
			<Skeleton className={'h-[35px] w-full'} />
			<Skeleton className={'h-[20px] w-[80px]'} />
			<Skeleton className={'h-[35px] w-full'} />
		</div>
	)
}
