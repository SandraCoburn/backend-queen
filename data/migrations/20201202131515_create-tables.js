exports.up = function (knex) {
  return knex.schema.createTable('visits', (tbl) => {
    tbl.uuid('id').primary().defaultTo(knex.raw('(UUID())'));
    tbl.text('domain', 128).notNullable();
    tbl.integer('visitors').unsigned().notNullable();
    tbl.text('date').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('visits');
};
