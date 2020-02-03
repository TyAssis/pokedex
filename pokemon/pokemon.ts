import express from 'express';

const router = express.Router();

import { find as findPokemon } from '../database/pokemon';

router.get('pokemon/:name', (req, res, next) => {
    // find a pokemon
    const pokemon = findPokemon(req.body.name);
    res.send(pokemon);
});

router.post('pokemon', (req, res, next) => (
  // create a pokemon
  next()
));

export { router };