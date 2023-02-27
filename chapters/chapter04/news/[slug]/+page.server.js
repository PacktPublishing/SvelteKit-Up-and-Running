import json from '$lib/articles.json';
import { error } from '@sveltejs/kit';

export function load({ params }) {
  let found = {};
  Object.keys(json).forEach((id) => {
    if(json[id].slug === params.slug) {
      found = json[id];
    }
  });
  if(Object.keys(found).length !== 0) {
    return found;
  }
  throw error(404, `Whoops! That article wasn\'t found!`);
}
