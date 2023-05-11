import users from '$lib/users.json';

/** @type {import('./$types').Actions} */
export const actions = {
  login: async ({request, cookies}) => {
    const form = await request.formData();

    const exists = users.filter(user => user.username === form.get('username'));

    // removed password hashing to deploy to cloudflare
    // for more information as to why we can't use bcrypt with cloudflare
    // see https://github.com/sveltejs/kit/issues/2850
    const auth = exists.filter(user => user.password === form.get('password'));
    console.log(auth);

    if(!exists.length || !auth.length) {
      return {msg: 'Invalid login!'};
    }


    cookies.set('identity', auth[0].identity, {path: '/'});
    return {msg: 'success!'}
  }
}
