'use client'

import {MoonIcon, SunIcon} from 'lucide-react'
import {useTranslations} from 'next-intl'
import {useTheme} from 'next-themes'
import {forwardRef} from 'react'
import {Button, ButtonProps} from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

export const ThemeSwitcher = forwardRef<HTMLButtonElement, ButtonProps>(({...props}, ref) => {
	const {setTheme} = useTheme()
	const t = useTranslations('Theme')

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					{...props}
					variant='outline'
					size='icon'
					ref={ref}>
					<SunIcon className='size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
					<MoonIcon className='absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end'>
				<DropdownMenuItem onClick={() => setTheme('light')}>{t('light')}</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme('dark')}>{t('dark')}</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme('system')}>{t('system')}</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
})
