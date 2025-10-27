import { Button } from '@/components/Button';
import Header from '@/components/Header';

export default function Home() {
	return (
		<main className='flex flex-col relative'>
			<Header href='/fotoPáginaPrincipal.jpg' objectPosition={40} />

			<div className='relative flex flex-col items-center justify-end gap-4 '>
				<h1 className='text-[1.7rem] text-black'>
					Uma Associação Cultural que surge na Torre, <br /> uma aldeia do
					concelho da Batalha, um lugar singular e com muito para contar.
				</h1>

				<Button href='/aldeia'>Saber Mais</Button>
			</div>
		</main>
	);
}
