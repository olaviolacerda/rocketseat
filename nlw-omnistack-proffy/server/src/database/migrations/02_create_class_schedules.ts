import Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable('class_schedules', (t: Knex.TableBuilder) => {
      t.string('id').primary().notNullable().unique();
      t.integer('week_day').notNullable();
      t.integer('from').notNullable();
      t.integer('to').notNullable();

      t.string('class_id')
        .notNullable()
        .references('id')
        .inTable('classes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema
    .dropTable('class_schedules');
}