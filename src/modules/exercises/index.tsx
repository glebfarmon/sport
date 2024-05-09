'use client'

import {CreateButton, Modal, PaginationContainer, Search} from '@/modules/exercises/dynamic-imports'
import {Records} from '@/modules/exercises/records'

export const Exercises = () => {
	return (
		<>
			<Modal />
			<div
				className={
					'm-auto flex min-h-full max-w-[850px] flex-col flex-nowrap justify-center gap-y-6 p-6'
				}>
				<div className={'flex gap-x-2'}>
					<Search />
					<CreateButton />
				</div>
				<div className={'order-2 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6'}>
					<Records />
				</div>
				<div className={'sm:order-3'}>
					<PaginationContainer />
				</div>
			</div>
		</>
	)
}
