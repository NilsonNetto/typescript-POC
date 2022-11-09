import Joi from "joi";

const gameSchema = Joi.object({
  title: Joi.string().min(3).max(100).required(),
  plataform: Joi.string().min(3).max(100).required(),
  purchased: Joi.boolean(),
  played: Joi.boolean(),
  gameplayTime: Joi.number().integer().required(),
  price: Joi.number().integer()
})

export {gameSchema}