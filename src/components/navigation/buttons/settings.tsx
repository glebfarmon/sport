import {Settings as SettingsIcon} from 'lucide-react'
import {forwardRef} from 'react'
import {Button, ButtonProps} from '@/components/ui/button'
import {PAGES} from '@/constants'
import {Link} from '@/hooks'
import {cn} from '@/utils'

export const Settings = forwardRef<HTMLButtonElement, ButtonProps>(({disabled, ...props}, ref) => {
	return (
		<Link
			href={PAGES.SETTINGS}
			className={cn(disabled && 'pointer-events-none')}>
			<Button
				variant={'outline'}
				size={'icon'}
				ref={ref}
				disabled={disabled}
				{...props}>
				<SettingsIcon strokeWidth={1} />
			</Button>
		</Link>
	)
})
