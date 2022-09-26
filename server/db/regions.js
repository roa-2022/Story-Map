const conn = require('./connection')

function getRegions(db = conn) {
  return db('regions')  
  .select()  

}

module.exports = {
  getRegions
}