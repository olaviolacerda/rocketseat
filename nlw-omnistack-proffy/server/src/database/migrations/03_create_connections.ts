import Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable('connections', (t: Knex.TableBuilder) => {
      t.string('id').primary().notNullable().unique();

      t.string('user_id')
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');

      t.timestamp('created_at')
        .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
        .notNullable();
    })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema
    .dropTable('connections');
}