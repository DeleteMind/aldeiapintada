import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	outputFileTracingIncludes: {
		'/arquivo': ['./outstatic/content/**/*'],
		'/arquivo/[slug]': ['./outstatic/content/**/*'],
		'/pintura-mural': ['./outstatic/content/**/*'],
		'/pintura-mural/[slug]': ['./outstatic/content/**/*'],
		'/programacao': ['./outstatic/content/**/*'],
		'/programacao/[slug]': ['./outstatic/content/**/*'],
	},
};

export default nextConfig;
