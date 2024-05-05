'use client'

import {makeStore, type AppStore} from '@/store'
import {ReactNode, useRef} from 'react'
import {Provider as ReduxProvider} from 'react-redux'

export const StoreProvider = ({children}: {children: ReactNode}) => {
	const storeRef = useRef<AppStore>()
	if (!storeRef.current) storeRef.current = makeStore()

	return <ReduxProvider store={storeRef.current}>{children}</ReduxProvider>
}

