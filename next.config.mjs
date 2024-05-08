import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	poweredByHeader: false,
	images: {
		remotePatterns: [
			{
				hostname: 'localhost'
			}
		]
	}
}

export default withNextIntl(nextConfig)
