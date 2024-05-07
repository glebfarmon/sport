import {CreateButton, Modal, Search} from '@/modules/exercises/dynamic-imports'
import {PaginationContainer} from '@/modules/exercises/pagination-container'
import {Records} from '@/modules/exercises/records'

export const Exercises = () => {
	return (
		<>
			<Modal />
			<div
				className={
					'flex flex-col flex-nowrap min-h-full justify-center m-auto max-w-[850px] gap-y-6 p-6'
				}>
				<div className={'flex gap-x-2'}>
					<Search />
					<CreateButton />
				</div>
				<div className={'grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6 order-2'}>
					<Records />
				</div>
				<div className={'sm:order-3'}>
					<PaginationContainer />
				</div>
			</div>
		</>
	)
}
