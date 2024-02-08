import {redirect} from 'next/navigation'

const CatchAll = () => {
  return redirect('/auth/login')
}

export default CatchAll
