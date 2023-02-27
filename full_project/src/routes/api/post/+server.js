import { json } from '@sveltejs/kit';

export function POST({ request }) {
  // save post to DB
  console.log(request);
  return json({
    status: true,
    method: request.method
  });
}
export function GET({ request }) {
  // retrieve post from DB
  console.log(request);
  return json({
    status: true,
    method: request.method
  });
}
