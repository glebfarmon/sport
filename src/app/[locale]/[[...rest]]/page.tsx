import {redirect} from 'next/navigation'
import {PAGES} from '@/constants/pages'

const CatchAll = () => {
	return redirect(PAGES.ROUTINES)
}

export default CatchAll
