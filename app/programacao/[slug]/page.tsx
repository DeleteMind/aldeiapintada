import { getDocumentBySlug } from 'outstatic/server';
import { twMerge } from 'tailwind-merge';
import Header from '@/components/Header';
import { Text } from '@/components/Text';
import { markdownToHtml } from '@/lib/markdownToHtml';
import type { ProgramacaoPost as ProgramacaoPostType } from '@/lib/types';

export default async function ProgramacaoPost({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const post = getDocumentBySlug('programas', (await params).slug, [
		'title',
		'publishedAt',
		'slug',
		'author',
		'content',
		'coverImage',
		'archive',
		'tags',
	]) as unknown as ProgramacaoPostType;
	console.log('post', post);

	const content = await markdownToHtml(post?.content || '');

	return (
		<>
			<Header src={post?.coverImage} objectPosition={60} />

			<article
				className={twMerge(
					'w-full p-6 flex flex-col gap-6 max-w-5xl mx-auto',
					!post?.coverImage && 'pt-16',
				)}
			>
				<Text size='5xl' weight='bold' color='primary'>
					{post?.title}
				</Text>

				<div
					className='prose lg:prose-xl '
					dangerouslySetInnerHTML={{ __html: content }}
				/>
			</article>
		</>
	);
}
