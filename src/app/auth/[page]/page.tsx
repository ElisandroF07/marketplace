import SignIn from '@/pages/sign-in/page'
import SignUp from '@/pages/sign-up/page'
import ConfirmEmail from '@/pages/confirm-email/page'

export default function Auth({ params }: { params: { page: string } }) {
	if (params.page === 'sign-up') {
		return <SignUp/>
	}
	else if(params.page === 'confirm-email'){
		return <ConfirmEmail/>
	}
	return <SignIn/>
}
