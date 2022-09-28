const connection = require('./connection')

function searchEnglish(region, db = connection) {
  return db('stories_regions')
    .join('regions', 'regions.id', 'storiesRegions.region_id')
    .join('stories', 'storiesRegions.story_id', 'stories.id')
    .select('*')
    .where('eng_name', region)
}
function searchMaori(region, db = connection) {
  return db('stories_regions')
    .join('regions', 'regions.id', 'storiesRegions.region_id')
    .join('stories', 'storiesRegions.story_id', 'stories.id')
    .select('*')
    .where('maori_name', region)
}

function addStory(data, db = connection) {
  return db('stories').insert(data)
}
function getStories(db = connection) {
  return db('stories').select()
}
module.exports = {
  searchEnglish,
  searchMaori,
  addStory,
  getStories,
}
