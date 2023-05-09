import { error } from '@sveltejs/kit';

const star_url= 'https://api.github.com/user/starred/sveltejs/kit';

export function load({ fetch }) {
  // throw error(401, { 
  //   message: 'You don\'t have permission to see this!',
  //   id: crypto.randomUUID()
  // });
  const repo = fetch( 'https://api.github.com/repos/sveltejs/kit' )
    .then( response => response.json() );

  return { repo };
}

export const actions = {
  star: async({ fetch }) => {
    const response = fetch(star_url, {
      method: 'PUT',
      headers: {
        'Content-Length': '0',
      }
    })
    .then(response => {
      const status = response.status;
      return {
        status: status,
        message: (status === 204 ? 'Success!' : 'Error')
      }
    });

    return response;
  },
  unstar: async({ fetch }) => {
    const response = fetch(star_url, {
      method: 'DELETE'
    })
    .then(response => {
      const status = response.status;
      return {
        status: status,
        message: (status === 204 ? 'Success!' : 'Error')
      }
    });

    return response;
  },
}
