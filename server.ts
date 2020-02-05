import express from 'express';
import bodyParser from 'body-parser';

import { authentication } from './database/users';
import { router as pokemonRouter } from './pokemon/pokemon';

const app = express();

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// middleware for all routes
app.all('*', async (req: express.Request, res, next) => {
  const name = req.headers.name ? req.headers.name as string : '';
  const token = req.headers.token ? req.headers.token as string : '';
  try {
    const currentTrainer = await authentication(name, token)
  } catch (error) {
    if (error instanceof Error) {
    res.status(401).send('You are not allowed') 
   }
  }
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