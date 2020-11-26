import knex from 'knex'

export function up (knex: knex): Promise<void> {
  return knex.schema.raw(`
    CREATE FUNCTION update_timestamp()
    RETURNS TRIGGER AS $$
    BEGIN
      NEW.updated_at = NOW();
      RETURN NEW;
    END;
    $$ LANGUAGE plpgsql;
  `)
}

export function down (knex: knex): Promise<void> {
  return knex.schema.raw('DROP FUNCTION update_timestamp()')
}
