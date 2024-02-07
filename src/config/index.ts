import {undefinedToEmpty} from '@/utils'

export const config = undefinedToEmpty({
  title: process.env.NEXT_PUBLIC_TITLE,
  url: process.env.NEXT_PUBLIC_URL
})
