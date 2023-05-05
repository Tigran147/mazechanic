import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://',
	base: '/mazechanic',
	vite: {
		ssr: {
			external: ["svgo"]
		}
	}
});
