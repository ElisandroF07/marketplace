import { FaX } from 'react-icons/fa6'

export default function SignAprovationAlert({text}:{text: string}) {

	function handleClick(){
		const signAlert = document.querySelector('#signAlert') as HTMLDivElement
		signAlert.style.transform = 'translateX(300px)'
	}

	return (
		<div id='signAlert' className="flex items-center translate-x-[300px] transition-all duration-500 justify-center gap-[10px] bg-green-500 px-[15px] py-[8px] rounded-[9px] z-[100] absolute top-[20px] right-[20px]">
			<p className="text-white font-[400] text-[13px]">
				{text}
			</p>
			<button onClick={handleClick} className="bg-black bg-opacity-30 p-[10px] rounded-[8px] w-max h-max">
				<FaX className="text-white w-[10px] h-[10px]" />
			</button>
		</div>
	)
}
