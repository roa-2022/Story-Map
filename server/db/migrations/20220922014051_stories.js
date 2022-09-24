/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('stories', (table) => {
    table.increments('id')
    table.text('author')
    table.text('title')
    table.text('synopsis')
    table.text('story_text')
    table.text('photo_url')
    table.text('location')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('stories')
}
