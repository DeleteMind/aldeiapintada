import { Button } from '@/components/Button';
import Header from '@/components/Header';
import { Text } from '@/components/Text';

import homeHeader from '@/public/assets/header/home.jpg';

export default function Home() {
	return (
		<>
			<Header src={homeHeader} objectPosition={60} />

			<main className='flex flex-col px-6 gap-20 py-20 items-center'>
				<section className='relative flex flex-col items-center justify-end gap-20 max-w-5xl'>
					<Text size='2xl'>
						Uma Associação Cultural que surge na Torre, <br /> uma aldeia do concelho da
						Batalha, um lugar singular e com muito para contar...
					</Text>

					<Button href='/aldeia'>Saber Mais</Button>
				</section>
			</main>
		</>
	);
}
