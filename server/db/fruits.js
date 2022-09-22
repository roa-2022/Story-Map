const connection = require('./connection')

function getStories(db = connection) {
  return db('stories').select()
}

module.exports = {
  getStories,
}
