exports.up = function (knex) {
    return knex.schema.createTable('usersStories', (table) => {
      table.increments('id')
      table.integer('story_id').references('stories.id')
      table.integer('auth0_id').references('regions.id')
    })
  }
  
  
  exports.down = function (knex) {
    return knex.schema.dropTable('usersStories')
  }
  
  