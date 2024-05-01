'use client'

import {Pencil, Trash2} from 'lucide-react'
import Image from 'next/image'
import {useState} from 'react'
import {Pagination} from '@/components/pagination'
import {PaginationSkeleton} from '@/components/pagination/skeleton'
import {Button} from '@/components/ui/button'
import type {TExerciseModal} from '@/models'
import type {IPaginationParams} from '@/models/api'
import {useGetExercisesQuery} from '@/store/api/exercise.api'
import {useDelayedFetching} from '@/hooks'
import {Modal} from '@/modules/exercises/modals'
import {Search} from '@/modules/exercises/search'
import {ExercisesSkeleton} from '@/modules/exercises/skeleton'

export const Exercises = () => {
	const [modal, setModal] = useState<TExerciseModal>({action: null})
	const [params, setParams] = useState<IPaginationParams>({page: 1, search: ''})
	const {data: exercises, isFetching} = useGetExercisesQuery(params)
	const isDelayedFetching = useDelayedFetching(isFetching)

	return (
		<>
			<Modal
				modal={modal}
				setModal={setModal}
			/>
			<div
				className={
					'flex flex-col flex-nowrap min-h-full justify-center m-auto max-w-[850px] gap-y-6 p-6'
				}>
				<div className={'flex gap-x-2'}>
					<Search
						search={params.search}
						setParams={setParams}
					/>
					<Button
						variant={'outline'}
						onClick={() => setModal({action: 'create'})}>
						Add
					</Button>
				</div>
				<div className={'grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6 order-2'}>
					{isDelayedFetching ? (
						[...Array(9)].map((_, i) => <ExercisesSkeleton key={i} />)
					) : exercises?.data && exercises.data.length > 0 ? (
						exercises.data.map(exercise => (
							<div
								className={
									'group relative rounded-lg border-2 border-dotted p-3 transition-colors hover:bg-secondary'
								}
								key={exercise.id}>
								<p className={'text-lg font-bold'}>{exercise.name}</p>
								<p className={'text-sm text-muted-foreground'}>{exercise.bodyPart}</p>
								{exercise.editable && (
									<div
										className={
											'invisible absolute right-4 top-4 flex gap-1 *:cursor-pointer *:text-foreground/50 *:transition-colors hover:*:text-foreground group-hover:visible'
										}>
										<Pencil
											onClick={() => setModal({action: 'edit', exercise})}
											size={16}
										/>
										<Trash2
											onClick={() => setModal({action: 'delete', exercise})}
											size={16}
										/>
									</div>
								)}
								<Image
									className={'filter-invert m-auto size-auto'}
									src={`/exercises/${exercise.image}`}
									height={80}
									width={220}
									alt={'exercise image'}
								/>
							</div>
						))
					) : (
						<p className={'text-xl'}>Not found! 😫</p>
					)}
				</div>
				<div className={'sm:order-3'}>
					{isDelayedFetching ? (
						<PaginationSkeleton />
					) : (
						exercises?.meta && (
							<Pagination
								setParams={setParams}
								meta={exercises.meta}
							/>
						)
					)}
				</div>
			</div>
		</>
	)
}
