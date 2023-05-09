// import { browser } from '$app/environment';
const key = 'DEMO_KEY'; // your API key here

export const prerender = true;
export function load() {
  // if(browser) {
  //  throw new Error('in the browser');
  // }
  const pic = fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}`)
    .then(response => {
      console.log('got response');
      return response.json();
    });

  return {pic};
}
