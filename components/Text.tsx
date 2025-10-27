import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface TextProps {
	children: ReactNode;
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
	color?: 'primary' | 'secondary' | 'accent' | 'undefined';
	weight?: 'normal' | 'medium' | 'bold';
	invertColor?: boolean;
	className?: string;
}
export function Text({
	children,
	size = 'md',
	color = 'primary',
	weight = 'normal',
	invertColor = false,
	className,
}: TextProps) {
	return (
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
				color === 'accent' && [
					invertColor ? 'text-[#00b499]' : 'text-[#00b499]',
				],
				// Weight
				weight === 'normal' && 'font-normal',
				weight === 'medium' && 'font-medium',
				weight === 'bold' && 'font-bold',
				className,
			)}
		>
			{children}
		</span>
	);
}
