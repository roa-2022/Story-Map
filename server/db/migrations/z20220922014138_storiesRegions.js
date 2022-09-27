exports.up = function (knex) {
  return knex.schema.createTable('storiesRegions', (table) => {
    table.increments('id')
    table.integer('story_id')
    table.integer('region_id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('storiesRegions')
}
