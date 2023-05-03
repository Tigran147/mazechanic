import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://Tugran147.github.io',
	base: '/mazechanic',
	vite: {
		ssr: {
			external: ["svgo"]
		}
	}
});
