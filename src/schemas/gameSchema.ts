import Joi from "joi";

const gameSchema = Joi.object({
  title: Joi.string().min(3).max(100).required(),
  plataform: Joi.string().min(3).max(100).required(),
  purchased: Joi.boolean().required(),
  gameplayTime: Joi.number().integer().required(),
  price: Joi.number().integer().required()
})

export {gameSchema}