import { Joi } from "celebrate";

export const createPointSchema = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    whatsapp: Joi.number().required(),
    latitude: Joi.number().required(),
    longitude: Joi.number().required(),
    uf: Joi.string().max(2).required(),
    city: Joi.string().required(),
    items: Joi.string().required(),
  })
};

