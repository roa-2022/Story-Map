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

function addStory(newStoryData ,db = connection) {
  return db('stories')
  .insert(newStoryData)  
}

function addStoryRegions(idObj ,db = connection) {
  return db('storiesRegions')
  .insert(idObj)  
}

module.exports = {
  getStories,
  getOneStory,
  addStory,
  addStoryRegions
}
