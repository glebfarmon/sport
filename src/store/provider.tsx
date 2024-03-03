'use client'

import {ReactNode, useRef} from 'react'
import {Provider as ReduxProvider} from 'react-redux'
import {AppStore, makeStore} from './index'

const StoreProvider = ({children}: {children: ReactNode}) => {
	const storeRef = useRef<AppStore>()
	if (!storeRef.current) storeRef.current = makeStore()

	return <ReduxProvider store={storeRef.current}>{children}</ReduxProvider>
}

export default StoreProvider
