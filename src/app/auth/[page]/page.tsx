import SignIn from '@/pages/sign-in/page'
import SignUp from '@/pages/sign-up/page'
import ConfirmEmail from '@/app/auth/confirm-email/[email]/page'

export default function Auth({ params }: { params: { page: string } }) {
	console.log(params.page)
	if (params.page === 'sign-up') {
		return <SignUp />
	}
	return <SignIn />
}
