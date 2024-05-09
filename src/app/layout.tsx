import type {Metadata, Viewport} from 'next'
import {ReactNode} from 'react'
import {config} from '@/config'
import {AUTHORS, DESCRIPTION, KEYWORDS} from '@/constants'

const {title, url} = config

export const metadata: Metadata = {
	title: {
		default: title,
		template: `%s | ${title}`
	},
	description: DESCRIPTION,
	keywords: KEYWORDS,
	authors: AUTHORS,
	metadataBase: new URL(url),
	generator: 'Next.js',
	creator: title,
	publisher: title,
	robots: 'index, follow',
	manifest: '/favicons/site.webmanifest',
	openGraph: {
		title,
		description: DESCRIPTION,
		type: 'website'
	},
	twitter: {
		title,
		description: DESCRIPTION
	},
	applicationName: title,
	category: DESCRIPTION,
	appleWebApp: {
		title: title,
		statusBarStyle: 'black-translucent',
		capable: true
	},
	icons: {
		icon: [
			{
				url: '/favicons/favicon-32x32.png',
				sizes: '32x32',
				type: 'image/png'
			},
			{
				url: '/favicons/favicon-16x16.png',
				sizes: '16x16',
				type: 'image/png'
			}
		],
		apple: {
			sizes: '180x180',
			url: '/favicons/apple-touch-icon.png'
		},
		shortcut: {
			url: '/favicons/favicon.ico'
		}
	}
}

export const viewport: Viewport = {
	themeColor: 'currentColor',
	//maximumScale: 1,
	minimumScale: 1
	//userScalable: false
}

const RootLayout = ({children}: {children: ReactNode}) => children

export default RootLayout
