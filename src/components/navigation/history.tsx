import {Clock9} from 'lucide-react'
import Link from 'next/link'
import {forwardRef} from 'react'
import {Button, ButtonProps} from '@/components/ui/button'
import {PAGES} from '@/constants'

export const History = forwardRef<HTMLButtonElement, ButtonProps>(({...props}, ref) => {
	return (
		<Button
			{...props}
			variant={'outline'}
			size={'icon'}
			ref={ref}
			asChild>
			<Link href={PAGES.PANEL}>
				<Clock9 strokeWidth={1} />
			</Link>
		</Button>
	)
})
