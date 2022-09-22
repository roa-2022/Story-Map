
exports.up = function (knex) {
  return knex.schema.createTable('regions', (table) => {
    table.increments('id')
    table.string('eng_name')
    table.string('maori_name')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('regions')
}