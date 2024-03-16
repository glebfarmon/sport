import {Settings as SettingsIcon} from 'lucide-react'
import Link from 'next/link'
import {forwardRef} from 'react'
import {Button, ButtonProps} from '@/components/ui/button'
import {PAGES} from '@/constants'

export const Settings = forwardRef<HTMLButtonElement, ButtonProps>(({...props}, ref) => {
	return (
		<Button
			variant={'outline'}
			size={'icon'}
			ref={ref}
			{...props}>
			<Link href={PAGES.SETTINGS}>
				<SettingsIcon strokeWidth={1} />
			</Link>
		</Button>
	)
})
