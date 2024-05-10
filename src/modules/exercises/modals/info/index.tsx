'use client'

import {useTranslations} from 'next-intl'
import Image from 'next/image'
import {ScrollableArea} from '@/components/scrollable-area'
import {Button} from '@/components/ui/button'
import {DialogDescription, DialogFooter, DialogHeader, DialogTitle} from '@/components/ui/dialog'
import {config} from '@/config'
import type {IExercise} from '@/models/api'
import {closeModal} from '@/store/slices/exercise.slice'
import {Link} from '@/hooks/use-navigation'
import {useAppDispatch} from '@/hooks/use-redux'

const InfoModal = ({exercise}: {exercise: IExercise}) => {
	const t = useTranslations('Exercises')
	const dispatch = useAppDispatch()

	return (
		<>
			<DialogHeader>
				<DialogTitle>{exercise.name}</DialogTitle>
				<DialogDescription>
					{exercise.bodyParts
						.map((value, i) => {
							const val = t(`BodyParts.${value}`)
							if (i > 0) return val.toLowerCase()
							return val
						})
						.join(', ')}
				</DialogDescription>
			</DialogHeader>
			<div className={'grid gap-4 py-4'}>
				<Image
					className={'filter-invert m-auto w-auto'}
					src={`${config.static_api_url}/exercises/${exercise.image}`}
					height={100}
					width={220}
					priority
					fetchPriority={'high'}
					alt={'exercise image'}
				/>
				<hr />
				{exercise.description ? (
					<ScrollableArea>
						<p className={'whitespace-pre-line text-sm'}>{exercise.description}</p>
					</ScrollableArea>
				) : (
					<p className={'text-sm text-primary/50'}>{t('Form.Info.empty_description')}</p>
				)}
				<hr />
			</div>
			<DialogFooter className={'flex-col'}>
				{exercise.videoUrl && (
					<Button
						variant={'secondary'}
						asChild>
						<Link
							href={exercise.videoUrl}
							target={'_blank'}>
							{t('Form.Info.video')}
						</Link>
					</Button>
				)}
				<Button onClick={() => dispatch(closeModal())}>{t('Form.Info.close')}</Button>
			</DialogFooter>
		</>
	)
}

export default InfoModal
