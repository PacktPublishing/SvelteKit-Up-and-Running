import bcrypt from 'bcrypt';
import users from '$lib/users.json';

/** @type {import('./$types').Actions} */
export const actions = {
  login: async ({request, cookies}) => {
    const form = await request.formData();
    // useful for generating your own test hashes
    //const hash = bcrypt.hashSync(form.get('password'), 10);
    //console.log(crypto.randomUUID());
    //console.log(hash);

    const exists = users.filter(user => user.username === form.get('username'));

    const auth = exists.filter(user => bcrypt.compareSync(form.get('password'), user.password));
    console.log(auth);

    if(!exists.length || !auth.length) {
      return {msg: 'Invalid login!'};
    }


    cookies.set('identity', auth[0].identity, {path: '/'});
    return {msg: 'success!'}
  }
}
