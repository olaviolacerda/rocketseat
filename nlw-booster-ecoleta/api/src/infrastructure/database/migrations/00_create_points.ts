import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('points', (t) => {
    t.increments('id').primary();
    t.string('name').notNullable();
    t.string('email').notNullable();
    t.string('whatsapp').notNullable();
    t.string('image').notNullable();
    t.decimal('latitude').notNullable();
    t.decimal('longitude').notNullable();
    t.string('city').notNullable();
    t.string('uf', 2).notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTableIfExists('points');
}
