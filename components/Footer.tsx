import Image from 'next/image';
import logoBW from '@/public/assets/logo-bw.jpeg';
import { Text } from './Text';

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className='w-full h-fit flex flex-row justify-between items-center px-8 py-6 border-0 border-t border-neutral-200'>
			<section className='lg:w-[200px]' />

			<section className=''>
				<Text size='sm' color='secondary'>
					© {currentYear} Aldeia Pintada <br />
					Todos os direitos reservados.
				</Text>
			</section>

			<section className='flex flex-row items-center'>
				<div className='flex flex-col items-end'>
					<Text size='xs' color='secondary' weight='semibold' className='w-fit'>
						SEGUE-NOS
					</Text>

					<div className='flex flex-col'>
						<Text
							size='xs'
							weight='medium'
							href='https://www.facebook.com/aldeiapintada'
							newTab
						>
							FACEBOOK
						</Text>
						<Text
							size='xs'
							weight='medium'
							href='https://www.instagram.com/aldeiapintada'
							newTab
						>
							INSTAGRAM
						</Text>
					</div>
				</div>

				<Image
					src={logoBW}
					alt='Logo_preto_e_branco'
					className='size-20 object-cover'
					width={100}
					height={100}
				/>
			</section>
		</footer>
	);
}
