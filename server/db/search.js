const connection = require('./connection')


function search(region, db = connection) {
  return db('stories_regions')
  .join('regions', 'regions.id', 'stories_regions.region_id')
  .join('stories', 'stories_regions.story_id', 'stories.id')
  .select('*')
  .where('name', region)
}

function addStory (data, db = connection) {
  return db('stories').insert(data)
}

function getStories (db = connection) {
  return db('stories').select()
}

module.exports = {
  search,
  addStory,
  getStories
}