const authentication = (name: string, token: string): Promise<any> => {
  let userValid: any;
  users.forEach(user => {
    if (user.name === name && user.token === token) {
      userValid = user;
    }
  }) 
  
  if (userValid) {
    return Promise.resolve({ userValid });
  }
  return Promise.reject(new Error('User not authenticated'));
}

const users = [
  {
    name: 'Taylon',
    token: '1234',
  },
]

export { authentication };