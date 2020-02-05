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
  const pokemon: Pokemon | undefined = pokemons.find(poke => {
    if (poke.name === name) {
      return poke;
    }
  });

  if (pokemon) {
    return Promise.resolve(pokemon);
  }
  return Promise.reject(Error('This pokemon does not exist'));
}

const pokemons: Array<Pokemon> = [
  {
    id: 1,
    name: 'Charmander',
    type: PokemonTypes.fire,
  }
];

export { find, pokemons };