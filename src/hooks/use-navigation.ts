import {createSharedPathnamesNavigation} from 'next-intl/navigation'
import {LOCALE_PREFIX, LOCALES} from '@/constants'

export const {Link, redirect, usePathname, useRouter} = createSharedPathnamesNavigation({
	locales: LOCALES,
	localePrefix: LOCALE_PREFIX
})
