import {redirect} from 'next/navigation'
import {PAGES} from '@/constants/pages'

const CatchAll = () => {
	return redirect(PAGES.SETTINGS_ACCOUNT)
}

export default CatchAll
