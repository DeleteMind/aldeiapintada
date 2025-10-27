import Link from 'next/link';
import type { ReactNode } from 'react';
import type { IconType } from 'react-icons';
import { twMerge } from 'tailwind-merge';
import { Text } from './Text';

interface ButtonProps {
	variant?: 'link' | 'button';
	text?: string;
	Icon?: IconType;
	onClick?: () => void;
	href?: string;
	newTab?: boolean;
	active?: boolean;
	invertTextColor?: boolean;
	children?: ReactNode;
	className?: string;
}
export function Button({
	variant = 'button',
	text,
	onClick,
	href,
	Icon,
	newTab,
	active,
	invertTextColor,
	children,
	className,
}: ButtonProps) {
	const button = (
		<button
			type='button'
			onClick={href ? undefined : onClick}
			className={twMerge(
				'flex flex-row items-center justify-center gap-2 cursor-pointer px-3 py-2',
				// Text + Icon Color
				invertTextColor ? 'text-neutral-50' : 'text-neutral-950',
				// Variants
				variant === 'button' &&
					'bg-[#ef8471] rounded-md hover:bg-[#ffb5a9] text-neutral-50',
				variant === 'link' && 'hover:text-[#00b499]',
				active && 'text-[#00b499]',
				// Animation
				'transition-[transform,brightness] duration-150 ease-out active:scale-[0.99] hover:brightness-110',

				className,
			)}
		>
			{Icon && (
				<Icon
					className={twMerge(
						'text-lg drop-shadow-md',
						variant === 'link' && 'hover:text-[#00b499]',
					)}
				/>
			)}

			{text && (
				<Text
					size='sm'
					color='undefined'
					weight='medium'
					className='hover:text-[#00b499] transition-colors duration-150 text-shadow-md'
				>
					{text}
				</Text>
			)}

			{children}
		</button>
	);

	return href ? (
		<Link href={href} target={newTab ? '_blank' : '_self'}>
			{button}
		</Link>
	) : (
		button
	);
}
