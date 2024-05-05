import {useTranslations} from 'next-intl'
import {Button} from '@/components/ui/button'
import {setModal} from '@/store/slices/exercise.slice'
import {useAppDispatch} from '@/hooks/use-redux'

const CreateButton = () => {
	const t = useTranslations('Exercises')
	const dispatch = useAppDispatch()

	return (
		<Button
			variant={'outline'}
			onClick={() => dispatch(setModal({action: 'create'}))}>
			{t('add')}
		</Button>
	)
}

export default CreateButton
