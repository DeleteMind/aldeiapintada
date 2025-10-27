'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import type { IconType } from 'react-icons';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { PiListBold, PiXBold } from 'react-icons/pi';
import { TbBrandLinktree } from 'react-icons/tb';
import { twMerge } from 'tailwind-merge';
import { Button } from './Button';

interface LinkProps {
	href: string;
	text?: string;
	Icon?: IconType;
}
const SOCIAL_LINKS: LinkProps[] = [
	{
		href: 'https://www.facebook.com/aldeiapintada/',
		Icon: FaFacebookF,
	},
	{
		href: 'https://www.instagram.com/aldeiapintada/',
		Icon: FaInstagram,
	},
	{
		href: 'https://linktr.ee/aldeiapintada',
		Icon: TbBrandLinktree,
	},
];

const NAV_LINKS: LinkProps[] = [
	{
		href: '/aldeia',
		text: 'ALDEIA',
	},
	{
		href: '/pinturaMural',
		text: 'PINTURA MURAL',
	},
	{
		href: '/programacao',
		text: 'PROGRAMAÇÃO',
	},
	{
		href: '/arquivo',
		text: 'ARQUIVO',
	},
	{
		href: '/contactos',
		text: 'CONTACTOS',
	},
];

interface HeaderProps {
	href?: string; // backdrop image src
	objectPosition?: 0 | 20 | 40 | 60 | 80 | 100; // y-position percentage in 20% increments (default 0)
	invertTextColor?: boolean;
}

export default function Header({
	href,
	objectPosition,
	invertTextColor,
}: HeaderProps) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const headerRef = useRef<HTMLElement | null>(null);
	const [headerHeight, setHeaderHeight] = useState(0);
	const [isScrolled, setIsScrolled] = useState(false);
	const pathname = usePathname();

	const positionClass = (() => {
		switch (objectPosition) {
			case 20:
				return 'object-[50%_20%]';
			case 40:
				return 'object-[50%_40%]';
			case 60:
				return 'object-[50%_60%]';
			case 80:
				return 'object-[50%_80%]';
			case 100:
				return 'object-[50%_100%]';
			default:
				return 'object-[50%_0%]';
		}
	})();

	const imageClassName = twMerge('object-cover', positionClass);

	useEffect(() => {
		const update = () => {
			if (headerRef.current) {
				setHeaderHeight(headerRef.current.offsetHeight);
			}
		};
		update();
		window.addEventListener('resize', update);
		return () => window.removeEventListener('resize', update);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<>
			<header
				ref={headerRef}
				className={twMerge(
					'z-10000 sticky top-0 w-full flex justify-center items-center h-24 transition-all duration-300 px-5',
					isScrolled && [
						'backdrop-blur-lg shadow-xs',
						invertTextColor ? 'bg-black/40' : 'bg-white/40',
					],
				)}
			>
				{/* Logo */}
				<Link className='bg-transparent hover:bg-transparent p-0' href='/'>
					<Image
						className=''
						src='/Aldeia Pintada_Cor_PNG.png'
						alt='Aldeia Pintada Logo'
						width={100}
						height={100}
					/>
				</Link>

				{/* Mobile Menu Button */}
				<Button
					Icon={isMenuOpen ? PiXBold : PiListBold}
					className='md:hidden'
					onClick={() => setIsMenuOpen(!isMenuOpen)}
				/>

				{/* Nav Buttons (Desktop) */}
				<nav className='hidden md:flex flex-row gap-4 flex-wrap justify-center mx-20'>
					{NAV_LINKS.map((link) => {
						const isActive = pathname === link.href;
						return (
							<Button
								variant='link'
								key={link.href}
								href={link.href}
								text={link.text}
								invertTextColor={invertTextColor}
								active={isActive}
							/>
						);
					})}
				</nav>

				{/* Social Buttons */}
				<div className='flex flex-row justify-center'>
					{SOCIAL_LINKS.map((link) => (
						<Button
							variant='link'
							key={link.href}
							href={link.href}
							newTab={true}
							invertTextColor={invertTextColor}
							Icon={link.Icon}
						/>
					))}
				</div>

				{/* Nav Buttons (Mobile) */}
				{isMenuOpen && (
					<nav className='md:hidden absolute top-full left-0 right-0 flex flex-col items-center gap-2 py-4 bg-white backdrop-blur-md text-lg'>
						{NAV_LINKS.map((link) => {
							const isActive = pathname === link.href;

							// TODO: Fix Social Position of overlay (use floating-ui?)
							return (
								<Button
									variant='link'
									key={link.href}
									text={link.text}
									href={link.href}
									active={isActive}
									onClick={() => setIsMenuOpen(false)}
								/>
							);
						})}
					</nav>
				)}
			</header>

			{href && (
				<div
					className='relative w-full h-96'
					style={{ marginTop: headerHeight ? -headerHeight : 0 }}
				>
					<Image src={href} alt='' fill className={imageClassName} priority />
				</div>
			)}
		</>
	);
}
