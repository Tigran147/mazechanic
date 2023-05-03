import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://Tigran147.github.io',
	base: '/',
	vite: {
		ssr: {
			external: ["svgo"]
		}
	}
});
