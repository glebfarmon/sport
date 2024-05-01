import {type NextFetchEvent, type NextRequest, NextResponse} from 'next/server'
import {config} from '@/config'
import {PAGES} from '@/constants'
import type {CustomMiddleware} from '@/middlewares/chain'

export const withAuthMiddleware = (middleware: CustomMiddleware) => {
	return async (request: NextRequest, event: NextFetchEvent) => {
		const response = NextResponse.next()

		const pathname = request.nextUrl.pathname
		const splitted = pathname.split('/')
		const isAuthPage = pathname.includes(PAGES.LOGIN) || pathname.includes(PAGES.REGISTER)

		//If the user is on the root page or on an auth page, check if the user is authorized
		if (splitted.includes(PAGES.ROOT.replace('/', '')) || isAuthPage) {
			const isAuth = (await isAuthorized(request.cookies.toString()))?.message === 'ok'

			if (isAuthPage && isAuth) {
				const url = new URL(PAGES.ROUTINES, request.url)
				return NextResponse.redirect(url)
			} else if (!isAuthPage && !isAuth) {
				const url = new URL(PAGES.LOGIN, request.url)
				return NextResponse.redirect(url)
			}
		}
		return middleware(request, event, response)
	}
}

const isAuthorized = async (cookie: string) => {
	try {
		const response = await fetch(`${config.api_url}/auth/check`, {
			headers: {
				Cookie: cookie
			}
		})
		return response.json()
	} catch (e) {
		throw new Error('Authorization failed')
	}
}
