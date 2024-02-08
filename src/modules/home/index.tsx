import {Button} from '@/components/ui/button'
import Link from 'next/link'

export const Home = () => {
  return (
    <div className={'container'}>
      <div className={'grid h-screen place-items-center'}>
        <div className={'flex flex-col items-center space-y-[3vw]'}>
          <p
            className={
              'text-[25vw] font-semibold tracking-tighter [text-shadow:_4px_2px_2px_theme(colors.red.700)] lg:text-[20vw]'
            }>
            <span className={'relative top-[5vw] text-red-400'}>08</span>
            <span className={'text-indigo-100 dark:text-foreground'}>\</span>
            <span className={'relative bottom-[5vw] text-indigo-100 dark:text-foreground'}>02</span>
          </p>
          <Button variant={'outline'} size={'lg'} asChild>
            <Link href={'/auth/login'}>Login</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
