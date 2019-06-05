
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        { name: 'Jay', cohort_id: 1 },
        { name: 'Zach', cohort_id: 1 },
        { name: 'Baz', cohort_id: 1 },
        { name: 'Triston', cohort_id: 2 },
        { name: 'Micheal', cohort_id: 2 },
        { name: 'Kimberlee', cohort_id: 2 },
        { name: 'Kayla', cohort_id: 3 },
        { name: 'Kendrick', cohort_id: 3 },
        { name: 'Joshua', cohort_id: 3 },
        { name: 'Erik', cohort_id: 4 },
        { name: 'Dante', cohort_id: 4 },
        { name: 'Alicia', cohort_id: 4 },
        { name: 'Nguyen', cohort_id: 5 },
        { name: 'Billie Joe', cohort_id: 5 }
      ]);
    });
};
