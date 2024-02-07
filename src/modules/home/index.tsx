'use client'

import {useTheme} from 'next-themes'

const Home = () => {
  const {setTheme, resolvedTheme} = useTheme()

  return (
    <div className={'container'}>
      <p
        className={'text-test'}
        onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}>
        Change color
      </p>
      <p onClick={() => setTheme('system')}>System color</p>
    </div>
  )
}

export default Home
