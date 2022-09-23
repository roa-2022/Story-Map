/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('stories', (table) => {
    table.increments('id').primary()
    table.string('auth0_id')
    table.string('author')
    table.string('title')
    table.string('synopsis')
    table.string('story_text')
    table.binary('photo_url')
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
