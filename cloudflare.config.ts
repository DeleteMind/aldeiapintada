import { bindings, defineConfig, defineWorker, triggers } from 'cf/config';

export default defineConfig({
	worker: defineWorker({
		name: 'aldeiapintada-app',
		entrypoint: 'vinext/server/fetch-handler',
		compatibilityDate: '2026-10-11',
		compatibilityFlags: ['nodejs_compat'],
		assets: { notFoundHandling: 'none', runWorkerFirst: ['/_vinext/static-cache/*'] },
		triggers: [
			triggers.fetch({ pattern: 'aldeiapintada.com/*', zone: 'aldeiapintada.com' }),
			triggers.fetch({ pattern: 'www.aldeiapintada.com/*', zone: 'aldeiapintada.com' }),
		],
		env: {
			ASSETS: bindings.assets(),
			IMAGES: bindings.images(),
			RESEND_API_KEY: bindings.secret(),
			OST_GITHUB_ID: bindings.secret(),
			OST_GITHUB_SECRET: bindings.secret(),
			OST_TOKEN_SECRET: bindings.secret(),
			OST_REPO_SLUG: bindings.text('aldeiapintada'),
			OST_REPO_OWNER: bindings.text('DeleteMind'),
			OST_REPO_BRANCH: bindings.text('main'),
		},
	}),
});
