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
    table.text('synopsis')
    table.text('story_text')
    table.binary('photo_url')
    table.decimal('longitude')
    table.decimal('latitude')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('stories')
}
