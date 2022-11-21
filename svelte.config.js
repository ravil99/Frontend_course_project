import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */

const dev = process.env.NODE_ENV === 'development';
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),

		// "paths" are needed only for correct Github Pages build

		paths: {
			base: dev ? '' : '/Frontend_course_project',
		},
	},
};

export default config;