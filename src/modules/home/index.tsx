import {HomeButton} from '@/modules/home/btn'

const formatter = new Intl.DateTimeFormat('pl-PL', {month: '2-digit', day: '2-digit'})
const [day, month] = formatter.format(new Date()).split('.')

export const Home = () => {
	return (
		<div className={'container'}>
			<div className={'grid h-screen place-items-center'}>
				<div className={'flex flex-col items-center space-y-[3vw]'}>
					<p
						className={
							'text-[25vw] font-semibold tracking-tighter [text-shadow:_4px_2px_2px_theme(colors.red.700)] lg:text-[20vw]'
						}>
						<span className={'relative top-[5vw] text-red-400'}>{day}</span>
						<span className={'text-indigo-100 dark:text-foreground'}>\</span>
						<span className={'relative bottom-[5vw] text-indigo-100 dark:text-foreground'}>
							{month}
						</span>
					</p>
					<HomeButton />
				</div>
			</div>
		</div>
	)
}
