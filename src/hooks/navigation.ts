import {createSharedPathnamesNavigation} from 'next-intl/navigation'
import {localePrefix, locales} from '@/data'

export const {Link, redirect, usePathname, useRouter} = createSharedPathnamesNavigation({
  locales,
  localePrefix
})
