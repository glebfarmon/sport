'use client'

import {DialogFooter, DialogHeader} from '@/components/ui/dialog'
import {Skeleton} from '@/components/ui/skeleton'

export const DeleteModalSkeleton = () => {
	return (
		<>
			<DialogHeader>
				<Skeleton className={'h-[25px] w-[100px]'} />
				<Skeleton className={'h-[40px] w-full'} />
			</DialogHeader>
			<DialogFooter>
				<Skeleton className={'w-[80px] h-[40px]'} />
				<Skeleton className={'w-[80px] h-[40px]'} />
			</DialogFooter>
		</>
	)
}
