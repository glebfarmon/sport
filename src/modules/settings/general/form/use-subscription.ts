import {useTheme} from 'next-themes'
import {useEffect} from 'react'
import type {UseFormReturn} from 'react-hook-form'
import {usePathname, useRouter} from '@/hooks/use-navigation'
import type {TOutputFormSchema} from '@/modules/settings/general/form/use-form-schema'

export const useSubscription = (watch: UseFormReturn<TOutputFormSchema>['watch']) => {
	const {setTheme} = useTheme()
	const router = useRouter()
	const pathname = usePathname()

	useEffect(() => {
		const subscription = watch(({language, theme}, {name}) => {
			switch (name) {
				case 'language':
					language && router.replace(pathname, {locale: language})
					break
				case 'theme':
					theme && setTheme(theme)
					break
			}
		})
		return () => subscription.unsubscribe()
	}, [watch])
}
