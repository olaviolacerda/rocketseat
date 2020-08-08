import Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable('users', (t: Knex.TableBuilder) => {
      t.string('id').primary().notNullable().unique();
      t.string('name').notNullable();
      t.string('avatar').notNullable();
      t.string('whatsapp').notNullable();
      t.string('bio').notNullable();
    })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema
    .dropTable('users');
}