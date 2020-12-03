exports.up = function (knex) {
  return knex.schema.createTable('visits', (tbl) => {
    tbl.increments();
    tbl.text('domain', 128).unique().notNullable();
    tbl.integer('visitors').unsigned().notNullable();
    tbl.text('date').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('visits');
};
