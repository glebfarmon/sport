'use client'

import {ChevronLeft} from 'lucide-react'
import {useRouter} from 'next/navigation'
import {forwardRef} from 'react'
import {Button, ButtonProps} from '@/components/ui/button'

export const GoBack = forwardRef<HTMLButtonElement, ButtonProps>(({...props}, ref) => {
	const {back} = useRouter()

	return (
		<Button
			{...props}
			variant={'outline'}
			size={'icon'}
			onClick={back}
			ref={ref}>
			<ChevronLeft className={'size-[1.2rem]'} />
		</Button>
	)
})

export default GoBack
