export const config = {
	title: process.env.NEXT_PUBLIC_TITLE ?? '',
	url: process.env.NEXT_PUBLIC_URL ?? '',
	api_url: process.env.NEXT_PUBLIC_API_URL ?? '',
	static_api_url: process.env.NEXT_PUBLIC_STATIC_API_URL ?? '',
	recaptcha: {
		public: process.env.NEXT_PUBLIC_GOOGLE_PUBLIC_KEY ?? '',
		secret: process.env.GOOGLE_SECRET_KEY ?? ''
	},
	min_fetching_time_in_ms: process.env.NEXT_PUBLIC_MIN_FETCHING_TIME_IN_MS
		? Number(process.env.NEXT_PUBLIC_MIN_FETCHING_TIME_IN_MS)
		: 400
}
