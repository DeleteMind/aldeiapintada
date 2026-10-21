import vinext from 'vinext/server/fetch-handler';
import {
	isImageOptimizationPath,
	negotiateImageFormat,
} from 'vinext/server/image-optimization';

type ExecutionContext = { waitUntil(promise: Promise<unknown>): void };

// vinext keeps no cache of optimized images and Cloudflare doesn't cache Worker
// responses, so every /_next/image request re-runs the Images binding on the
// full-size source. Keep the transformed image in the edge cache instead.
async function cachedImage(
	request: Request,
	key: URL,
	env: unknown,
	ctx: ExecutionContext,
) {
	// The output format follows Accept, which the Cache API ignores, so it goes in the key.
	key.searchParams.set('format', negotiateImageFormat(request.headers.get('Accept')));

	const cache = (caches as unknown as { default: Cache }).default;
	const cached = await cache.match(key);
	if (cached) return cached;

	const response: Response = await vinext.fetch(request, env, ctx);
	if (response.ok) ctx.waitUntil(cache.put(key, response.clone()));
	return response;
}

export default {
	...vinext,
	fetch(request: Request, env: unknown, ctx: ExecutionContext) {
		const url = new URL(request.url);
		if (request.method === 'GET' && isImageOptimizationPath(url.pathname)) {
			return cachedImage(request, url, env, ctx);
		}
		return vinext.fetch(request, env, ctx);
	},
};
