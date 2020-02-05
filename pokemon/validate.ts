import { body, validationResult } from 'express-validator';
import express from 'express';

const pokemonRules = () => {
  return [
    body('username').isEmail(),
    body('password').isLength({ min: 5 }),
  ]
}

const pokemonValidate = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    return next()
  }
  const extractedErrors: any = []
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

  return res.status(422).json({
    errors: extractedErrors,
  })
}

export {
  pokemonRules,
  pokemonValidate,
}