const connection = require('./connection')

function getStories(db = connection) {
  return db('regions')
    .join('storiesRegions', 'regions.id', 'storiesRegions.region_id')
    .join('stories', 'storiesRegions.story_id', 'stories.id')
    .select('*')
}

module.exports = {
  getStories,
}
