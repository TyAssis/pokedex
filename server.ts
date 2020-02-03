import express from 'express';
import bodyParser from 'body-parser';

import { authentication } from './database/users';
import { router as pokemonRouter } from './pokemon/pokemon';

const app = express();

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// middleware for all routes
app.all('*', (_req, _res, next) => {
  authentication('Taylon', '1234')
  next()
});

// routes
app.get('/', (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => res.send('Hello world'));
app.use(pokemonRouter);

// infra
const port = 4444;
app.listen(port, () => {
  console.log(`Let\'s gotta them\'all is running on port ${port}`);
})