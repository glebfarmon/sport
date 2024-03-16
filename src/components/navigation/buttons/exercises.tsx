import {Dumbbell} from 'lucide-react'
import Link from 'next/link'
import {forwardRef} from 'react'
import {Button, ButtonProps} from '@/components/ui/button'
import {PAGES} from '@/constants'

export const Exercises = forwardRef<HTMLButtonElement, ButtonProps>(({...props}, ref) => {
	return (
		<Link href={PAGES.EXERCISES}>
			<Button
				variant={'outline'}
				size={'icon'}
				ref={ref}
				{...props}>
				<Dumbbell strokeWidth={1} />
			</Button>
		</Link>
	)
})
