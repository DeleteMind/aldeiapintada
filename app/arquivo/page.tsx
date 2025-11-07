import { getDocuments } from 'outstatic/server';
import Header from '@/components/Header';
import { PostCard } from '@/components/PostCard';
import type { ProgramacaoPost } from '@/lib/types';

import arquivoHeader from '@/public/assets/header/arquivo.jpg';

async function getData() {
	return getDocuments('programas', [
		'title',
		'description',
		'content',
		'slug',
		'coverImage',
		'publishedAt',
		'archive',
	]);
}
export default async function Arquivo() {
	const posts = (await getData()) as ProgramacaoPost[];

	return (
		<>
			<Header src={arquivoHeader} objectPosition={0} />

			<main className='flex flex-col p-6 items-center'>
				<section className='flex flex-col gap-4 w-full'>
					{posts
						.filter((p) => p.archive === true)
						.map((p, i) => (
							<PostCard key={i} post={p} collection='programas' showDate='full' />
						))}
				</section>
			</main>
		</>
	);
}
