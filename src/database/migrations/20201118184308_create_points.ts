import knex from 'knex'

export async function up (knex: knex): Promise<void> {
  return knex.schema
    .createTable('points', table => {
      table.increments('id').primary()
      table.string('name').notNullable().unique()
      table.string('email').notNullable().unique()
      table.integer('phone_number').notNullable().unique()
      table.string('image_url').notNullable().unique()
      table.integer('user_id').notNullable().references('id').inTable('users')
      table.string('address').notNullable().unique()
      table.string('city').notNullable()
      table.string('state', 2).notNullable()
      table.timestamps(true, true)
    })
    .raw(`
      CREATE TRIGGER update_timestamp
      BEFORE UPDATE
      ON points
      FOR EACH ROW
      EXECUTE PROCEDURE update_timestamp()
    `)
}

export async function down (knex: knex): Promise<void> {
  return knex.schema.dropTable('points')
}
