import knex from 'knex';
import * as knexfile from '../infrastructure/database/config/knexfile';
import { DbConnection } from '../types';
import { logger } from './logger';

let db: DbConnection;

export function dbConnection(): DbConnection {
  if (!db) {
    db = knex(knexfile);
  }
  logger.info('Successfully get db connection');
  return db;
}
