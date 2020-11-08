exports.up = function (knex) {
  return knex.schema.createTable('users', function (users) {
    users.increments(); //could use uuid here

    users
      .string('email', 125) //selected random string length
      .notNullable()
      .unique();

    users.string('password', 128).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('users');
};
