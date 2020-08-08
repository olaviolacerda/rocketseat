import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('point_items', (t) => {
    t.increments('id').primary();
    t.integer('point_id').notNullable().references('id').inTable('points');
    t.integer('item_id').notNullable().references('id').inTable('items');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTableIfExists('point_items');
}
