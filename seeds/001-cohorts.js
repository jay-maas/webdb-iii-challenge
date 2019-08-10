
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cohorts').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cohorts').insert([
        { name: 'Full Stack Web' },
        { name: 'Ios Development' },
        { name: 'Android Development' },
        { name: 'Data Science' },
        { name: 'UX Design' }
      ]);
    });
};
