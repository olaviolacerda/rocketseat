import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('items', (t) => {
    t.increments('id').primary();
    t.string('title').notNullable();
    t.string('image').notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTableIfExists('items');
}
