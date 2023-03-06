export function load() {
  console.log('notifications loaded')
  return {
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
    },
  }
}
