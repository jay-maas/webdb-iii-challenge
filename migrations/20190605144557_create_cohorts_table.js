
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cohorts', table => {
      table.increments()
      table.string('name', 32).notNullable().unique()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('cohorts')
};
