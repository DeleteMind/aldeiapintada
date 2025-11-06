import { getDocuments } from 'outstatic/server';
import Header from '@/components/Header';
import { PostCard } from '@/components/PostCard';
import { Text } from '@/components/Text';
import type { PinturaPost } from '@/lib/types';

async function getData() {
	return getDocuments('pinturas', [
		'title',
		'description',
		'content',
		'slug',
		'coverImage',
		'publishedAt',
	]);
}
export default async function Arquivo() {
	const posts = (await getData()) as PinturaPost[];

	// Sort posts by publishedAt descending (most recent first)
	const sortedPosts = posts.sort(
		(a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
	);

	// Group posts by year
	const postsByYear = sortedPosts.reduce(
		(acc, post) => {
			const year = new Date(post.publishedAt).getFullYear();
			if (!acc[year]) acc[year] = [];
			acc[year].push(post);
			return acc;
		},
		{} as Record<number, PinturaPost[]>,
	);

	return (
		<>
			<Header href='/Header_PinturaMural.jpeg' objectPosition={0} />

			<main className='flex flex-col p-6 items-center'>
				<section className='flex flex-col gap-4 w-full'>
					{Object.entries(postsByYear)
						.reverse()
						.map(([year, yearPosts]) => (
							<div key={year} className='flex flex-col gap-2'>
								<Text size='2xl' weight='bold' color='primary'>
									{year}
								</Text>

								{yearPosts.map((post) => (
									<PostCard key={post.slug} post={post} collection='pinturas' />
								))}
							</div>
						))}
				</section>
			</main>
		</>
	);
}
