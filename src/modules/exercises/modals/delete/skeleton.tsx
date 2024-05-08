import {DialogFooter, DialogHeader} from '@/components/ui/dialog'
import {Skeleton} from '@/components/ui/skeleton'

export const DeleteModalSkeleton = () => {
	return (
		<>
			<DialogHeader>
				<Skeleton className={'m-auto h-[25px] w-[100px] sm:m-0'} />
				<Skeleton className={'h-[40px] w-full'} />
			</DialogHeader>
			<DialogFooter>
				<Skeleton className={'flex h-[40px] w-full sm:w-[80px]'} />
				<Skeleton className={'h-[40px] w-full sm:w-[80px]'} />
			</DialogFooter>
		</>
	)
}
