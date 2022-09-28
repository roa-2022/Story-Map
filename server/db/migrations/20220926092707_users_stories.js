exports.up = function (knex) {
  return knex.schema.createTable('users_stories', (table) => {
    table.increments('id')
    table.integer('story_id')
    table.string('auth0_id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('usersStories')
}
