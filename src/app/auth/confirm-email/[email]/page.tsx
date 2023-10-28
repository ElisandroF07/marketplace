import ConfirmEmailPage from "@/components/pages/confirm-email/confirmPage";

export default function ConfirmEmail({ params }: { params: { email: string } }) {
	return <ConfirmEmailPage email={params.email}/>
}
