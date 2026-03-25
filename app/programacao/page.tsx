import { getDocuments } from 'outstatic/server';
import Header from '@/components/Header';
import { PostCard } from '@/components/PostCard';
import { Text } from '@/components/Text';
import type { ProgramacaoPost } from '@/lib/types';

import programacaoHeader from '@/public/assets/header/programacao.jpg';

async function getData() {
	return getDocuments('programas', [
		'title',
		'description',
		'content',
		'slug',
		'coverImage',
		'publishedAt',
		'archive',
		'tags',
	]);
}
export default async function Programacao() {
	const posts = (await getData()) as unknown as ProgramacaoPost[];

	return (
		<>
			<Header src={programacaoHeader} objectPosition={60} />

			<main className='flex flex-col p-6 items-center gap-6'>
				<section className='flex flex-col gap-4 w-full'>
					<Text size='2xl' weight='bold' color='primary'>
						EVENTOS
					</Text>
					{posts
						.filter((p) => !p.archive)
						.filter((p) => p.tags?.some((t) => t.value === 'evento'))
						.map((p) => (
							<PostCard key={p.slug} post={p} collection='programas' />
						))}
				</section>

				<section className='flex flex-col gap-4 w-full'>
					<Text size='2xl' weight='bold' color='primary'>
						OFICINAS
					</Text>
					{posts
						.filter((p) => !p.archive)
						.filter((p) => p.tags?.some((t) => t.value === 'oficina'))
						.map((p) => (
							<PostCard key={p.slug} post={p} collection='programas' />
						))}
				</section>
			</main>
		</>
	);
}
