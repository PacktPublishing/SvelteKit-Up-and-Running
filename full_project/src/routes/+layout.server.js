export function load({ cookies }) {
  const data = {
    notifications: {
      count: 3,
      items: [
        {
          type: `comment`,
          content: `Hi! I'm Dylan!`
        },
        {
          type: `comment`,
          content: `Hi Dylan. Nice to meet you!`
        },
        {
          type: `comment`,
          content: `Welcome to the chapter about load()!`
        }
      ]
    }
  };
  if(cookies.get('identity') === '1') {
    // lookup user ID in database
    data.user = {
      id: 1,
      name: 'Dylan'
    }
  }
  return data;
}
