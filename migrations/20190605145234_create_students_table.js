
exports.up = function(knex, Promise) {
  return knex.schema.createTable('students', table => {
      table.increments()
      table.string('name', 64).notNullable().unique()
      table.integer('cohort_id').unsigned().references('id').inTable('cohorts').onDelete('CASCADE').onUpdate('CASCADE')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists
};
