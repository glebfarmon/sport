'use client'

import {useEffect, useRef, useState} from 'react'

export const useDelayedFetching = (isFetching: boolean, defaultWaitTime: number = 500) => {
	const [isLoading, setLoading] = useState(isFetching)
	const timeoutRef = useRef<ReturnType<typeof setTimeout>>()
	const startTimeRef = useRef<number>()

	useEffect(() => {
		if (isFetching) {
			setLoading(isFetching)
			startTimeRef.current = Date.now()
			return
		}

		const waitTime = startTimeRef.current
			? Math.max(defaultWaitTime - (Date.now() - startTimeRef.current), 0)
			: defaultWaitTime

		timeoutRef.current = setTimeout(() => {
			setLoading(false)
		}, waitTime)
	}, [isFetching])

	useEffect(() => {
		return () => clearTimeout(timeoutRef.current)
	}, [])

	return isLoading
}
