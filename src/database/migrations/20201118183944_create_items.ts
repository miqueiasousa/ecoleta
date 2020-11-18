import knex from 'knex'

export async function up (knex: knex): Promise<void> {
  return knex.schema.createTable('items', table => {
    table.increments('id').primary()
    table.string('title').notNullable().unique()
    table.string('image_url').notNullable().unique()
  })
}

export async function down (knex: knex): Promise<void> {
  return knex.schema.dropTable('items')
}
