import Link from 'next/link';
import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface TextProps {
	children: ReactNode;
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
	color?: 'primary' | 'secondary' | 'accent' | 'undefined';
	weight?: 'normal' | 'medium' | 'semibold' | 'bold';
	invertColor?: boolean;
	href?: string;
	newTab?: boolean;
	className?: string;
}
export function Text({
	children,
	size = 'md',
	color = 'primary',
	weight = 'normal',
	invertColor = false,
	href,
	newTab = false,
	className,
}: TextProps) {
	const text = (
		<span
			className={twMerge(
				// Size
				size === 'xs' && 'text-xs',
				size === 'sm' && 'text-sm',
				size === 'md' && 'text-base',
				size === 'lg' && 'text-lg',
				size === 'xl' && 'text-xl',
				size === '2xl' && 'text-2xl',
				size === '3xl' && 'text-3xl',
				size === '4xl' && 'text-4xl',
				size === '5xl' && 'text-5xl',
				// Color
				color === 'primary' && [
					invertColor ? 'text-neutral-50' : 'text-neutral-950',
				],
				color === 'secondary' && [
					invertColor ? 'text-neutral-300' : 'text-neutral-700',
				],
				color === 'accent' && [invertColor ? 'text-teal-500' : 'text-teal-500'],
				// Weight
				weight === 'normal' && 'font-normal',
				weight === 'medium' && 'font-medium',
				weight === 'semibold' && 'font-semibold',
				weight === 'bold' && 'font-bold',

				href && 'cursor-pointer hover:text-teal-500',
				className,
			)}
		>
			{children}
		</span>
	);

	return href ? (
		<Link href={href} target={newTab ? '_blank' : '_self'}>
			{text}
		</Link>
	) : (
		text
	);
}
