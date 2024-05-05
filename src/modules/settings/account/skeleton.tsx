import {Skeleton} from '@/components/ui/skeleton'

export const AccountSkeleton = () => {
	return (
		<div className={'w-full space-y-4 rounded-md border border-input p-6'}>
			<Skeleton className={'h-[20px] w-[80px]'} />
			<Skeleton className={'h-[40px] w-full'} />
			<Skeleton className={'h-[20px] w-[80px]'} />
			<Skeleton className={'h-[35px] w-full'} />
			<Skeleton className={'h-[20px] w-[80px]'} />
			<Skeleton className={'h-[35px] w-full'} />
			<Skeleton className={'h-[20px] w-[80px]'} />
			<Skeleton className={'h-[35px] w-full'} />
			<div className={'flex flex-col gap-y-2 sm:flex-row sm:justify-between'}>
				<Skeleton className={'h-[35px] w-full sm:w-[100px]'} />
				<Skeleton className={'h-[35px] w-full sm:w-[100px]'} />
			</div>
		</div>
	)
}
