import path from 'path';

module.exports = {
  client: 'sqlite3',
  debug: true,
  useNullAsDefault: true,
  connection: {
    supportBigNumbers: true,
    bigNumberStrings: true,
    multipleStatements: true,
    dateStrings: true,
    filename: path.resolve(__dirname, '..', 'database.sqlite'),
  },
  pool: {
    min: 1,
    max: 3,
  },
  migrations: {
    directory: path.resolve(__dirname, '..', 'migrations'),
  },
  seeds: {
    directory: path.resolve(__dirname, '..', 'seeds'),
  },
};
