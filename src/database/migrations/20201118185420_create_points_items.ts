import knex from 'knex'

export async function up (knex: knex): Promise<void> {
  return knex.schema.createTable('points_items', table => {
    table.increments('id').primary()
    table.integer('point_id').notNullable().references('id').inTable('points')
    table.integer('item_id').notNullable().references('id').inTable('items')
  })
}

export async function down (knex: knex): Promise<void> {
  return knex.schema.dropTable('points_items')
}