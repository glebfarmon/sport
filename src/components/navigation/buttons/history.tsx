import {Clock9} from 'lucide-react'
import {forwardRef} from 'react'
import {Button, ButtonProps} from '@/components/ui/button'
import {PAGES} from '@/constants'
import {Link} from '@/hooks'
import {cn} from '@/utils'

export const History = forwardRef<HTMLButtonElement, ButtonProps>(({disabled, ...props}, ref) => {
	return (
		<Link
			href={PAGES.HISTORY}
			className={cn(disabled && 'pointer-events-none')}>
			<Button
				variant={'outline'}
				size={'icon'}
				ref={ref}
				disabled={disabled}
				{...props}>
				<Clock9 strokeWidth={1} />
			</Button>
		</Link>
	)
})
