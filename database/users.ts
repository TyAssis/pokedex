const authentication = (name: string, password: string): Promise<any> => {
  console.log(name, password);
  return Promise.resolve({
    id: 1,
    name: 'Taylon',
  })
  return Promise.reject(Error('User not authenticated'));
}

export { authentication };