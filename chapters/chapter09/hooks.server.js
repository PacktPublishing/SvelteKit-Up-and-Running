import { GITHUB } from '$env/static/private';
import fs from 'fs';

export async function handleFetch( { request, fetch  } ) {
  if (request.url.startsWith('https://api.github.com/')) {
    request.headers.set('Accept', 'application/vnd.github+json');
    request.headers.set('Authorization', 'Bearer ' + GITHUB);
    request.headers.set('X-GitHub-Api-Version', '2022-11-28');
  }

  return fetch(request);
}

export async function handle({ event, resolve }) {
  event.setHeaders({'X-NOT-FROM-GITHUB': 'our value'});
  const response = await resolve(event);
  response.headers.set('another', 'custom value');
  return response;
}

export async function handleError({ error, event }) {
  const log = today() + ' ' + error.message + ' @ ' + event.request.url;
  fs.appendFile('./app.log', log + '\n', (err) => {
    if(err) {
      console.log(err);
    }
  });
  console.log(event.request)
  return {
    error: error.message
  }
}

function today() {
  const current = new Date();
  return current.getDate() + "-" +
         current.getDay() + "-" +
         current.getFullYear() + " " +
         current.getHours() + ":" +
         current.getMinutes() + ":" +
         current.getSeconds();
}
