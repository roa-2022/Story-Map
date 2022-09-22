const connection = require('./connection')

function searchEnglish(region, db = connection) {
  return db('regions').where('eng_name', region)
}
function searchMaori(region, db = connection) {
  return db('regions').where('maori_name', region)
}

module.exports = {
  searchEnglish,
  searchMaori
}
