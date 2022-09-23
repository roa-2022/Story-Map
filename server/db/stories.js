const connection = require('./connection')

function getStories(db = connection) {
  return db('regions')
    .join('storiesRegions', 'regions.id', 'storiesRegions.region_id')
    .join('stories', 'storiesRegions.story_id', 'stories.id')
    .select('*')
}

function getOneStory(id, db = connection) {
  return db('regions')
    .join('storiesRegions', 'regions.id', 'storiesRegions.region_id')
    .join('stories', 'storiesRegions.story_id', 'stories.id')
    .select('*')
    .where('stories.id', id)
}

// Add Story

function addStory(newData ,db = connection) {
  return db('stories')
  // .join('storiesRegions', 'stories.id', 'storiesRegions.region_id')
  // .join('regions', 'storiesRegions.region_id', 'regions.id')
  .insert(newData)  
}

module.exports = {
  getStories,
  getOneStory,
  addStory
}
