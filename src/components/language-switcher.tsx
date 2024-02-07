'use client'

import {forwardRef} from 'react'
import {LanguagesIcon} from 'lucide-react'
import {useRouter, usePathname} from '@/hooks'
import {Button, ButtonProps} from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import {localesFull} from '@/data'

export const LanguageSwitcher = forwardRef<HTMLButtonElement, ButtonProps>(({...props}, ref) => {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button {...props} variant="outline" size="icon" ref={ref}>
          <LanguagesIcon className="size-[1.2rem] rotate-0 scale-100 transition-all" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.keys(localesFull).map(locale => (
          <DropdownMenuItem key={locale} onClick={() => router.replace(pathname, {locale})}>
            {localesFull[locale]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
})
