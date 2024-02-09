export const config = {
  title: process.env.NEXT_PUBLIC_TITLE,
  url: process.env.NEXT_PUBLIC_URL,
  recaptcha: {
    public: process.env.NEXT_PUBLIC_GOOGLE_PUBLIC_KEY,
    secret: process.env.GOOGLE_SECRET_KEY
  }
}
