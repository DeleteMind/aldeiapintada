import { getImageProps } from 'next/image';
import { remark } from 'remark';
import html from 'remark-html';

// Post images sit in the prose column (lg:prose-xl from 1024px).
const contentImageSizes = '(min-width: 1024px) 800px, 100vw';

const escapeAttribute = (value = '') => value.replaceAll('&', '&amp;');

// Inline images point at the full-size uploads; send local ones through the
// image optimizer with a srcset, as next/image would.
function optimizeImages(content: string) {
	return content.replace(/<img src="(\/[^"]*)"/g, (_, src: string) => {
		const { props } = getImageProps({
			src,
			alt: '',
			fill: true,
			sizes: contentImageSizes,
		});
		return `<img src="${escapeAttribute(props.src)}" srcset="${escapeAttribute(props.srcSet)}" sizes="${escapeAttribute(props.sizes)}" loading="lazy" decoding="async"`;
	});
}

export async function markdownToHtml(markdown: string) {
	const result = await remark().use(html).process(markdown);
	return optimizeImages(result.toString());
}
