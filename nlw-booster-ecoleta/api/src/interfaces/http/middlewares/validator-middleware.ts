import { celebrate, SchemaOptions } from 'celebrate';

export const validatorMiddleware = (schema: SchemaOptions): ReturnType<typeof celebrate> => {
  return celebrate(schema, {
    abortEarly: false
  })
};

