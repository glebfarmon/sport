'use client'

import {LanguagesIcon} from 'lucide-react'
import {forwardRef} from 'react'
import {Button, ButtonProps} from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import {LOCALES_FULL} from '@/constants'
import {usePathname, useRouter} from '@/hooks'

export const LanguageSwitcher = forwardRef<HTMLButtonElement, ButtonProps>(({...props}, ref) => {
	const router = useRouter()
	const pathname = usePathname()

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					{...props}
					variant='outline'
					size='icon'
					ref={ref}>
					<LanguagesIcon className='size-[1.2rem] rotate-0 scale-100 transition-all' />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end'>
				{Object.keys(LOCALES_FULL).map(locale => (
					<DropdownMenuItem
						key={locale}
						onClick={() => router.replace(pathname, {locale})}>
						{LOCALES_FULL[locale]}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
})
