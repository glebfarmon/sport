'use client'

import {Pencil, Trash2} from 'lucide-react'
import {useTranslations} from 'next-intl'
import Image from 'next/image'
import {config} from '@/config'
import {useGetExercisesQuery} from '@/store/api/exercise.api'
import {setModal} from '@/store/slices/exercise.slice'
import {useAppDispatch, useAppSelector, useDelayedFetching} from '@/hooks'
import {ExercisesSkeleton} from '@/modules/exercises/skeleton'

export const Records = () => {
	const t = useTranslations('Exercises')

	const dispatch = useAppDispatch()
	const page = useAppSelector(state => state.exercise.page)
	const search = useAppSelector(state => state.exercise.search)

	const {data: exercises, isFetching} = useGetExercisesQuery({page, search})
	const isDelayedFetching = useDelayedFetching(isFetching)

	if (isDelayedFetching)
		return [...Array(exercises?.data.length || 9)].map((_, i) => <ExercisesSkeleton key={i} />)

	if (!exercises?.data || exercises.data.length <= 0)
		return <p className={'text-xl'}>{t('not_found')}</p>

	return exercises.data.map(exercise => (
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
					<button
						id={exercise.id}
						aria-label={t('Aria.edit')}>
						<Pencil
							onClick={() => dispatch(setModal({action: 'edit', exercise}))}
							size={16}
						/>
					</button>
					<button aria-label={t('Aria.delete')}>
						<Trash2
							onClick={() => dispatch(setModal({action: 'delete', exercise}))}
							size={16}
						/>
					</button>
				</div>
			)}
			<Image
				className={'filter-invert m-auto w-full h-auto'}
				src={`${config.static_api_url}/exercises/${exercise.image}`}
				height={80}
				width={220}
				priority={true}
				fetchPriority={'high'}
				alt={'exercise image'}
			/>
		</div>
	))
}
