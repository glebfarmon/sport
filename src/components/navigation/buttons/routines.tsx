import {LayoutGrid} from 'lucide-react'
import Link from 'next/link'
import {forwardRef} from 'react'
import {Button, ButtonProps} from '@/components/ui/button'
import {PAGES} from '@/constants'

export const Routines = forwardRef<HTMLButtonElement, ButtonProps>(({...props}, ref) => {
	return (
		<Link href={PAGES.ROUTINES}>
			<Button
				variant={'outline'}
				size={'icon'}
				ref={ref}
				{...props}>
				<LayoutGrid strokeWidth={1} />
			</Button>
		</Link>
	)
})
