/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('stories', (table) => {
    table.increments('id')
    table.string('author')
    table.string('auth0_id')
    table.string('title')
    table.string('synopsis')
    table.string('story_text')
    table.string('photo_url')
    table.string('location')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('stories')
}
