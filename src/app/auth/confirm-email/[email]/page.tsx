import ConfirmEmailPage from "@/components/pages/confirm-email/confirmPage";

export default function ConfirmEmail({ params }: { params: { email: string } }) {
	console.log(params.email)
	return <ConfirmEmailPage email={params.email}/>
}
