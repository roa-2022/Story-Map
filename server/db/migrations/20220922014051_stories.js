/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('stories', (table) => {
    table.increments('id')
    table.string('author')
    table.string('title')
    table.text('synopsis', 'longtext')
    table.text('story_text', 'longtext')
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
