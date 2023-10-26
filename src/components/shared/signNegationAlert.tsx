import { FaX } from 'react-icons/fa6'

export default function SignNegationAlert({text}:{text: string}) {

	function handleClick(){
		const signAlert = document.querySelector('#signAlert') as HTMLDivElement
		signAlert.style.right = '-300px'
		
	}

	return (
		<div id='signAlert' className="flex items-center justify-center transition-all duration-500 gap-[10px] bg-red-500 px-[15px] py-[8px] rounded-[9px] z-[100] absolute top-[20px] -right-[300px]">
			<p className="text-white font-[400]" style={{fontSize: 'var(--alert-fontSize)'}}>
				{text}
			</p>
			<button onClick={handleClick} className="bg-black bg-opacity-30 p-[10px] rounded-[8px] w-max h-max">
				<FaX className="text-white w-[var(--alert-iconSize)] h-[var(--alert-iconSize)]" />
			</button>
		</div>
	)
}
