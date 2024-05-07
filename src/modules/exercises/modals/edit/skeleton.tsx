import {DialogFooter, DialogHeader} from '@/components/ui/dialog'
import {Skeleton} from '@/components/ui/skeleton'

export const EditModalSkeleton = () => {
	return (
		<>
			<DialogHeader>
				<Skeleton className={'h-[25px] w-[80px]'} />
				<Skeleton className={'h-[40px] w-full'} />
			</DialogHeader>
			<div className={'grid gap-4 py-4'}>
				<div className={'space-y-2'}>
					<Skeleton className={'h-[20px] w-[50px]'} />
					<Skeleton className={'h-[35px] w-full'} />
				</div>
				<div className={'space-y-2'}>
					<Skeleton className={'h-[20px] w-[70px]'} />
					<Skeleton className={'h-[35px] w-full'} />
				</div>
				<div className={'space-y-2'}>
					<Skeleton className={'h-[20px] w-[80px]'} />
					<Skeleton className={'h-[70px] w-full'} />
				</div>
				<div className={'space-y-2'}>
					<Skeleton className={'h-[20px] w-[50px]'} />
					<Skeleton className={'h-[35px] w-full'} />
				</div>
				<div className={'space-y-2'}>
					<Skeleton className={'h-[20px] w-[70px]'} />
					<Skeleton className={'h-[35px] w-full'} />
				</div>
			</div>
			<DialogFooter>
				<Skeleton className={'w-[110px] h-[40px]'} />
			</DialogFooter>
		</>
	)
}
