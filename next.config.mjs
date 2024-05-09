import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	poweredByHeader: false,
	images: {
		remotePatterns: [
			{
				hostname: process.env.NEXT_PUBLIC_STATIC_HOST || 'localhost'
			}
		]
	}
}

export default withNextIntl(nextConfig)
