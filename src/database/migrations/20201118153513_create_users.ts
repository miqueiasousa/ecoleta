import knex from 'knex'

export async function up (knex: knex): Promise<void> {
  return knex.schema
    .createTable('users', table => {
      table.increments('id').primary()
      table.string('name').notNullable()
      table.string('email').notNullable().unique()
      table.string('password').notNullable()
      table.string('reset_password_token').notNullable().defaultTo('')
      table.timestamps(true, true)
    })
    .raw(`
      CREATE TRIGGER update_timestamp
      BEFORE UPDATE
      ON users
      FOR EACH ROW
      EXECUTE PROCEDURE update_timestamp()
    `)
}

export async function down (knex: knex): Promise<void> {
  return knex.schema.dropTable('users')
}
