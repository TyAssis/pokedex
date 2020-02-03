enum PokemonTypes {
  water = 'Water',
  fire = 'Fire',
  leaf = 'Leaf',
  ice = 'Ice',
  figther = 'Figther',
  electric = 'Electric',
  normal = 'Normal',
  psychic = 'Psychic',
  ghost = 'Ghost',
}

interface Pokemon {
  id: number;
  name: string;
  type: PokemonTypes | PokemonTypes[];
}

const find = (name: string): Promise<Pokemon> => {
  if (name === 'Charmander') {
    return Promise.resolve({
      id: 1,
      name: 'Charmander',
      type: PokemonTypes.fire,
    })
  }
  return Promise.reject(Error('This pokemon does not exist'));
}

export { find };