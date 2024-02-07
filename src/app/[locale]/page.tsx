import Home from '@/modules/home'
import {unstable_setRequestLocale} from 'next-intl/server'
import {IParamsLocale} from '@/types'

const HomePage = ({params: {locale}}: IParamsLocale) => {
  unstable_setRequestLocale(locale)
  return <Home />
}

export default HomePage
