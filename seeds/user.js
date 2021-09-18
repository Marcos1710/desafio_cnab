const sha1 = require('sha1')

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {name: 'Teste', email: 'teste@gmail.com', password: sha1('123456')},
      ]);
    });
};
