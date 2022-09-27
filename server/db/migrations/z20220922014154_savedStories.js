exports.up = function (knex) {
  return knex.schema.createTable('saved_stories', (table) => {
    table.increments('id')
    table.integer('auth0_id')
    table.integer('story_id')

  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('saved_stories')
}
