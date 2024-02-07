import Home from '@/modules/home'
import {unstable_setRequestLocale} from 'next-intl/server'
import {IPage} from '@/types'

const HomePage = ({params: {locale}}: IPage) => {
  unstable_setRequestLocale(locale)
  return <Home />
}

export default HomePage
