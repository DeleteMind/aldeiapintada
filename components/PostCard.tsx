import Link from 'next/link';
import type { OstDocument } from 'outstatic';
import { twMerge } from 'tailwind-merge';
import { Text } from '@/components/Text';

export function PostCard({
	post,
	showDate = true,
}: {
	post: OstDocument;
	showDate?: boolean;
}) {
	console.log('post', post);

	return (
		<Link
			className={twMerge(
				'w-full flex flex-row justify-between items-center border border-neutral-400 px-4 py-2',
				'text-neutral-950 hover:text-teal-500 transition-colors duration-150',
				'hover:bg-neutral-100',
			)}
			href={`/programacao/${post.slug}`}
		>
			<Text size='lg' weight='medium' color='undefined'>
				{post.title}
			</Text>

			{showDate && (
				<Text size='sm' weight='normal' color='undefined'>
					{new Date(post.publishedAt).toLocaleDateString('pt-PT', {
						day: '2-digit',
						month: '2-digit',
						year: 'numeric',
					})}
				</Text>
			)}
		</Link>
	);
}
