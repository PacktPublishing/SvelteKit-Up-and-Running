export async function handleError({ error, event }) {
  console.log('client handled error' + error.message);
  console.log(event.url);
  return {message: 'Whoops, looks like you found an error! Sorry about that.'};
}
