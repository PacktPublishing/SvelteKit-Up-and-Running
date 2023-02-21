export const actions = {
  default: async (event) => {
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
  }
}
