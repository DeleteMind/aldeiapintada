import { Button } from '@/components/Button';
import Header from '@/components/Header';
import ImageCarousel from '@/components/ImageCarousel';
import { Text } from '@/components/Text';

export default function Aldeia() {
	return (
		<>
			<Header
				href='/Header_Aldeia.JPG'
				objectPosition={60}
				invertTextColor={true}
			/>

			<main className='flex flex-col p-5 gap-20 pt-20 items-center'>
				<Text size='2xl' className='max-w-5xl'>
					<Text size='2xl' weight='medium'>
						A Aldeia Pintada
					</Text>{' '}
					é uma{' '}
					<Text size='2xl' weight='medium'>
						Associação Cultural
					</Text>{' '}
					que surge na{' '}
					<Text size='2xl' weight='medium'>
						Torre{' '}
					</Text>{' '}
					da Magueixa, uma aldeia do concelho da Batalha, hoje conhecida apenas
					por Torre,{' '}
					<Text size='2xl' weight='medium'>
						um lugar singular e com muito para contar.
					</Text>{' '}
					A ideia nasce da vontade de documentar o seu{' '}
					<Text size='2xl' weight='medium'>
						património
					</Text>{' '}
					e usá-lo como{' '}
					<Text size='2xl' weight='medium'>
						estímulo para a criação artística e programação cultural.
					</Text>{' '}
					<br />
					<br />
					As{' '}
					<Text size='2xl' weight='medium'>
						histórias, as lendas, os cantares ou as vivências,
					</Text>{' '}
					recolhidas em{' '}
					<Text size='2xl' weight='medium'>
						diálogo com os habitantes,
					</Text>{' '}
					são a base para intervenções como a{' '}
					<Text size='2xl' weight='medium'>
						pintura de murais,
					</Text>{' '}
					o{' '}
					<Text size='2xl' weight='medium'>
						vídeo, a música ou a instalação.
					</Text>{' '}
					Para além de{' '}
					<Text size='2xl' weight='medium'>
						presentear as pessoas da terra,
					</Text>{' '}
					este projeto pretende também{' '}
					<Text size='2xl' weight='medium'>
						dar a conhecer melhor o lugar ao forasteiro
					</Text>{' '}
					que por ali passa,{' '}
					<Text size='2xl' weight='medium'>
						valorizando a memória e identidade local
					</Text>{' '}
					ou simplesmente{' '}
					<Text size='2xl' weight='medium'>
						trazer cor à aldeia.
					</Text>
				</Text>

				<ImageCarousel
					imageHeight={600}
					imageWidth={600}
					images={[
						{ src: '/images/galeria-1.jpg', alt: 'Galeria imagem 1' },
						{ src: '/images/galeria-2.jpg', alt: 'Galeria imagem 2' },
						{ src: '/images/galeria-3.jpg', alt: 'Galeria imagem 3' },
						{ src: '/images/galeria-4.jpg', alt: 'Galeria imagem 4' },
						{ src: '/images/galeria-5.jpg', alt: 'Galeria imagem 5' },
						{ src: '/images/galeria-6.jpg', alt: 'Galeria imagem 6' },
						{ src: '/images/galeria-7.jpg', alt: 'Galeria imagem 7' },
						{ src: '/images/galeria-8.jpg', alt: 'Galeria imagem 8' },
					]}
				/>

				<section className='flex flex-col items-center gap-20'>
					<Text size='5xl' weight='bold'>
						MAPA DA ALDEIA
					</Text>
					<Text>
						Permite a descoberta de todos de todas as pinturas murais realizadas
						até ao momento, bem como de informações sobre as mesmas. Leva-nos
						também a lugares que destacamos na nossa aldeia como “pontos de
						interesse”, como eiras para apreciar a natureza ou uma tasca para um
						cafezinho.
					</Text>
					<Button
						href='https://www.google.com/maps/d/u/0/viewer?mid=12uQ-54JxIuYFFuS8r99oAsB_rAsRxPbt&ll=39.65727979629874%2C-8.761598399999992&z=15&fbclid=PAAaaVJbs99rNer1I8PKnqJ8QnBj9PV6_zutPiZ79WWmN-KPMBzQCqVdYrDDg'
						newTab={true}
					>
						Ver no Google Maps
					</Button>
				</section>
			</main>
		</>
	);
}
