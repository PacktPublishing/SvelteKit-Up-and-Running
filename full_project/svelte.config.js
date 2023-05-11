//import adapter from '@sveltejs/adapter-auto';
//import adapter from '@sveltejs/adapter-node';
import adapter from '@sveltejs/adapter-cloudflare';

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


