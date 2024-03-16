import {Clock9} from 'lucide-react'
import Link from 'next/link'
import {forwardRef} from 'react'
import {Button, ButtonProps} from '@/components/ui/button'
import {PAGES} from '@/constants'

export const History = forwardRef<HTMLButtonElement, ButtonProps>(({...props}, ref) => {
	return (
		<Link href={PAGES.HISTORY}>
			<Button
				variant={'outline'}
				size={'icon'}
				ref={ref}
				{...props}>
				<Clock9 strokeWidth={1} />
			</Button>
		</Link>
	)
})
