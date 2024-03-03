'use client'

import {useTranslations} from 'next-intl'
import Link from 'next/link'
import {Button} from '@/components/ui/button'
import {Skeleton} from '@/components/ui/skeleton'
import {PAGES} from '@/constants/pages'
import {useIsAuthorizedQuery} from '@/store/api/auth.api'

export const HomeButton = () => {
	const {data, isFetching} = useIsAuthorizedQuery()
	const t = useTranslations()

	return (
		<Button
			variant={'outline'}
			size={'lg'}
			disabled={isFetching}
			asChild={!isFetching}>
			{isFetching ? (
				<Skeleton className={'h-[15px] w-[100px] rounded-full'} />
			) : data ? (
				<Link href={PAGES.CABINET}>{t('Cabinet.goto')}</Link>
			) : (
				<Link href={PAGES.LOGIN}>{t('Auth.Login.goto')}</Link>
			)}
		</Button>
	)
}
