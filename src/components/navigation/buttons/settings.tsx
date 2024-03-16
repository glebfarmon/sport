import {Settings as SettingsIcon} from 'lucide-react'
import Link from 'next/link'
import {forwardRef} from 'react'
import {Button, ButtonProps} from '@/components/ui/button'
import {PAGES} from '@/constants'

export const Settings = forwardRef<HTMLButtonElement, ButtonProps>(({...props}, ref) => {
	return (
		<Link href={PAGES.SETTINGS}>
			<Button
				variant={'outline'}
				size={'icon'}
				ref={ref}
				{...props}>
				<SettingsIcon strokeWidth={1} />
			</Button>
		</Link>
	)
})
