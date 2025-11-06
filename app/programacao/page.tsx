import Link from 'next/link';
import { getDocuments } from 'outstatic/server';
import Header from '@/components/Header';
import { PostCard } from '@/components/PostCard';
import { Text } from '@/components/Text';

async function getData() {
	return getDocuments('programas', [
		'title',
		'description',
		'content',
		'slug',
		'coverImage',
		'publishedAt',
	]);
}
export default async function Programacao() {
	const posts = await getData();

	return (
		<>
			<Header href='/Header_programacao.jpg' objectPosition={60} />

			<main className='flex flex-col p-6 items-center'>
				<section className='flex flex-col gap-4 w-full'>
					{posts.map((p, i) => (
						<PostCard key={i} post={p} showDate={false} />
					))}
				</section>
			</main>
		</>
	);
}
