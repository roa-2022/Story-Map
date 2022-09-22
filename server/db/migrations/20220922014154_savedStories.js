
exports.up = function (knex) {
  return knex.schema.createTable('saved_stories', (table) => {
    table.increments('id')
    table.string('story_id')
    table.string('user_id')
  })
}


exports.down = function (knex) {
  return knex.schema.dropTable('saved_stories')
}
