exports.up = function(knex) {
    return knex.schema.createTable('cnabs', function(table) {
      table.increments('id').primary()
      table.string('type', 50).notNullable()
      table.string('date', 50).notNullable()
      table.string('value', 50).notNullable()
      table.string('cpf', 50).notNullable()
      table.string('card', 50).notNullable()
      table.string('hour', 50).notNullable()
      table.string('owner', 50).notNullable()
      table.string('store', 50).notNullable()
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('cnabs')
  };