import {DialogFooter, DialogHeader} from '@/components/ui/dialog'
import {Skeleton} from '@/components/ui/skeleton'

export const InfoModalSkeleton = () => {
	return (
		<>
			<DialogHeader>
				<Skeleton className={'m-auto h-[25px] w-[120px] sm:m-0'} />
				<Skeleton className={'h-[25px] w-[100px]'} />
			</DialogHeader>
			<div className={'grid gap-4 py-4'}>
				<Skeleton className={'h-[100px] w-full'} />
				<hr />
				<Skeleton className={'h-[100px] w-full'} />
				<hr />
			</div>
			<DialogFooter>
				<Skeleton className={'h-[40px] w-[80px]'} />
			</DialogFooter>
		</>
	)
}
