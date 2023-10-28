import SignIn from '@/pages/sign-in/page'
import SignUp from '@/pages/sign-up/page'

export default function Auth({ params }: { params: { page: string } }) {
	if (params.page === 'sign-up') {
		return <SignUp />
	}
	return <SignIn />
}
