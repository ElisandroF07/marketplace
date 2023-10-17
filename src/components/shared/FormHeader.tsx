import React from 'react';

interface IProps {
	title: string;
	subtitle: string;
}

export default function FormHeader(props: IProps) {
	return (
		<div>
			<h1
				className="font-[500] text-[28px] w-[70%] mt-[30px] text-[var(--text-primaryColor)]"
				style={{ lineHeight: '20px' }}>
				{' '}
				{props.title}
			</h1>
			<p className="font-[200] text-[14px] mt-[10px] text-[var(--text-secondaryColor)]">
				{props.subtitle}
			</p>
		</div>
	);
}
