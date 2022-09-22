const connection = require('./connection')

function searchEnglish(region, db = connection) {
  return db('regions')
  .join('storiesRegions', 'regions.id', 'storiesRegions.region_id')
  .join('stories', 'storiesRegions.story_id', 'stories.id')
  .select('*')
  .where('eng_name', region)
}
function searchMaori(region, db = connection) {
  return db('regions')
  .join('storiesRegions', 'regions.id', 'storiesRegions.region_id')
  .join('stories', 'storiesRegions.story_id', 'stories.id')
  .select('*')
  .where('maori_name', region)
}

module.exports = {
  searchEnglish,
  searchMaori
}
