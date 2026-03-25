import { getDocuments } from 'outstatic/server';
import { Button } from '@/components/Button';
import Header from '@/components/Header';
import PosterCarousel from '@/components/PosterCarousel';
import { Text } from '@/components/Text';
import type { ProgramacaoPost } from '@/lib/types';

import homeHeader from '@/public/assets/header/home.jpg';

async function getData() {
	return getDocuments('programas', [
		'title',
		'slug',
		'coverImage',
		'publishedAt',
		'archive',
		'aAcontecer',
	]);
}

export default async function Home() {
	const posts = (await getData()) as unknown as ProgramacaoPost[];
	const posters = posts
		.filter((post) => !post.archive && post.aAcontecer && post.coverImage)
		.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
		.map((post) => ({
			src: post.coverImage!,
			title: post.title,
			date: post.publishedAt,
			href: `/programacao/${post.slug}`,
		}));

	return (
		<>
			<Header src={homeHeader} objectPosition={60} />

			<main className='flex flex-col px-6 gap-20 py-20 items-center'>
				<section className='relative flex flex-col items-center justify-end gap-20 max-w-5xl'>
					<Text size='2xl'>
						Uma Associação Cultural que surge na Torre, <br /> uma aldeia do concelho da
						Batalha, um lugar singular e com muito para contar.
					</Text>

					<Button href='/aldeia'>Saber Mais</Button>
				</section>

				{posters.length > 0 && (
					<section className='flex w-full max-w-5xl flex-col gap-6'>
						<Text size='2xl' weight='bold' color='primary'>
							A ACONTECER
						</Text>

						<PosterCarousel posters={posters} />
					</section>
				)}
			</main>
		</>
	);
}
