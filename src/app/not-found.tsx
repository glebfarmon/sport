'use client'

import Error from 'next/error'
import {DEFAULT_LOCALE} from '@/constants'

export default function NotFound() {
	return (
		<html lang={DEFAULT_LOCALE}>
			<body>
				<Error statusCode={404} />
			</body>
		</html>
	)
}
