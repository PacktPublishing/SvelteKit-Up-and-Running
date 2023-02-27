export const actions = {
  create: async (event) => {
    const form = await event.request.formData();
    const url = event.url;
    console.log(url.searchParams);

    const comment = form.get('comment');
    if(comment) {
      // save comment to DB here
      return {
        status: true,
        msg: `Your comment at ${url.hostname} has been received!`
      }
    }
  },
  star: async () => {
    return {
      status: true,
      msg: 'You starred this comment!'
    }
  },
  reply: async () => {
    return {
      status: true,
      msg: 'You replied!'
    }
  }
}
