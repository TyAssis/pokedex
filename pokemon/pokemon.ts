import express from 'express';
import { pokemons } from '../database/pokemon';

const router = express.Router();

import { find as findPokemon } from '../database/pokemon';
import { pokemonRules, pokemonValidate } from './validate';

router.get('pokemon/:name', (req, res, next) => {
    // find a pokemon
    const pokemon = findPokemon(req.body.name);
    res.send(pokemon);
});

router.post('pokemon', pokemonRules, pokemonValidate, (req, res, next) => {
  // create a pokemon 
  pokemons.push({
    id: 2,
    name: req.body.name,
    type: req.body.type,
  });
  res.send(pokemons);
});

export { router };