'use client'

import {type ReactNode, type ReactPortal, useEffect, useMemo} from 'react'
import {createPortal} from 'react-dom'

const Portal = ({children}: {children: ReactNode}): ReactPortal => {
	const container = useMemo(() => document.createElement('div'), [])

	useEffect(() => {
		document.body.appendChild(container)
		return () => {
			document.body.removeChild(container)
		}
	}, [])

	return createPortal(children, container) as ReactPortal
}

export default Portal
