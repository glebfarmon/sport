import {cookies} from 'next/headers'
import {redirect} from 'next/navigation'
import {ReactNode} from 'react'
import {config} from '@/config'
import {PAGES} from '@/constants'

export const AuthProvider = ({
	children,
	authPage = false
}: {
	children: ReactNode
	authPage?: boolean
}): Promise<ReactNode> => {
	return new Promise((resolve, reject) => {
		fetch(`${config.api_url}/auth/check`, {
			headers: {
				Cookie: cookies().toString()
			}
		})
			.then(data => {
				const ok = data.ok

				if (authPage) {
					if (ok) redirect(PAGES.HOME)
				} else {
					if (!ok) redirect(PAGES.LOGIN)
				}

				resolve(children)
			})
			.catch(e => {
				reject(e)
			})
	})
}
