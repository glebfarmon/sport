import {DialogFooter, DialogHeader} from '@/components/ui/dialog'
import {Skeleton} from '@/components/ui/skeleton'

export const DeleteModalSkeleton = () => {
	return (
		<>
			<DialogHeader>
				<Skeleton className={'h-[25px] w-[100px] m-auto sm:m-0'} />
				<Skeleton className={'h-[40px] w-full'} />
			</DialogHeader>
			<DialogFooter>
				<Skeleton className={'h-[40px] flex sm:w-[80px] w-full rounded-none'} />
				<Skeleton className={'h-[40px] sm:w-[80px] w-full'} />
			</DialogFooter>
		</>
	)
}
