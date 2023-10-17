import Link from 'next/link';
import React from 'react';

interface IProps {
    href: string;
    id: string;
}

export default function RedirectLink(props:IProps) {
	return (
		<Link
			id={props.id}
			href={props.href}
			className="opacity-0"></Link>
	);
}
