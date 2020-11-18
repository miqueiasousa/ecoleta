import knex from 'knex'

export async function up (knex: knex): Promise<void> {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary()
    table.string('name').notNullable().unique()
    table.string('email').notNullable().unique()
    table.string('password').notNullable()
    table.string('reset_password_token').notNullable().defaultTo('')
    table.timestamps(true, true)
  })
}

export async function down (knex: knex): Promise<void> {
  return knex.schema.dropTable('users')
}
