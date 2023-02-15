import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
    alias: {
      db: '/src/db.js',
      img: '/src/lib/images'
    }
  },
};

export default config;


