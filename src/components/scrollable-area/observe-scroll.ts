import {type RefObject, useEffect, useState} from 'react'

export const useObserveScroll = (ref: RefObject<HTMLDivElement>) => {
	const [reachedBegin, setReachedBegin] = useState(true)
	const [reachedEnd, setReachedEnd] = useState(false)
	const [overflowing, setOverflowing] = useState(false)

	useEffect(() => {
		if (!ref.current) {
			return
		}

		const refOverflowing = ref.current.scrollHeight > ref.current.clientHeight
		if (overflowing !== refOverflowing) setOverflowing(refOverflowing)

		//20 -> height in px of sticky element
		const handleScroll = () => {
			if (!ref.current) return

			if (
				reachedEnd &&
				ref.current.scrollHeight - ref.current.scrollTop - ref.current.clientHeight > 0
			) {
				setReachedEnd(false)
			} else if (
				ref.current.scrollHeight - ref.current.scrollTop <=
				ref.current.clientHeight + 20
			) {
				setReachedEnd(true)
			}

			if (!reachedBegin && ref.current.scrollTop <= 20) {
				setReachedBegin(true)
			} else if (reachedBegin && ref.current.scrollTop > 0) {
				setReachedBegin(false)
			}
		}

		ref.current.addEventListener('scroll', handleScroll)
		return () => ref.current?.removeEventListener('scroll', handleScroll)
	}, [ref, reachedBegin, reachedEnd, overflowing])

	return {reachedBegin, reachedEnd, overflowing}
}
