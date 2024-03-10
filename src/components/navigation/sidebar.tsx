import {Exercises, History, Progress, Routines, Settings} from '@/components'

export const Sidebar = () => {
	return (
		<aside
			className={
				'fixed bottom-0 w-dvw border-t p-2 lg:right-0 lg:top-0 lg:w-auto lg:border-0 lg:border-l'
			}>
			<div className={'flex shrink-0 flex-row justify-evenly gap-y-2 lg:flex-col'}>
				<Routines />
				<History />
				<Progress />
				<Exercises />
				<Settings />
			</div>
		</aside>
	)
}
