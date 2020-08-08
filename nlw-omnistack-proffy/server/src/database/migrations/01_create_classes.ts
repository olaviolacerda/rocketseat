import Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable('classes', (t: Knex.TableBuilder) => {
      t.string('id').primary().notNullable().unique();
      t.string('subject').notNullable();
      t.string('cost').notNullable();

      t.string('user_id')
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema
    .dropTable('classes');
}