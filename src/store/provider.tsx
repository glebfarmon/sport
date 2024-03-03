'use client'

import {ReactNode} from 'react'
import {Provider as ReduxProvider} from 'react-redux'
import {makeStore} from './index'

const Provider = ({children}: {children: ReactNode}) => {
	return <ReduxProvider store={makeStore()}>{children}</ReduxProvider>
}

export default Provider
