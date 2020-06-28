import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
  await knex.schema.createTable("users", (table) => {
    table.string('name').notNullable();
    table.string('image').notNullable();
  });
}


export async function down(knex: Knex): Promise<any> {
  await knex.schema.dropTable('users');
}

