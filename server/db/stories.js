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

function addStory(newStoryData, db = connection) {
  return db('stories').insert(newStoryData)
}

function addStoryRegions(idObj, db = connection) {
  return db('storiesRegions').insert(idObj)
}

function getStoriesByUser(db = connection) {
  return db('stories')
    .join('users', 'users.auth0_id', 'stories.auth0_id')
    .select()
}

function deleteStory(id, db = connection) {
  return db('stories').where('id', id).delete()
}

function updateStory(newStory, db = connection) {
  return db('stories').where('id', newStory.id).update(newStory)
}

function userCanEdit(storyId, auth0Id, db = connection) {
  return db('stories')
    .where('id', storyId)
    .first()
    .then((story) => {
      if (story.auth0_id !== auth0Id) {
        throw new Error('Unauthorized')
      }
    })
}
//---------------FAVORITES-----------------//
function getUserFavorites(auth0_id, db = connection) {
  return db('usersStories')
    .join('stories', 'usersStories.story_id', 'stories.id')
    .select('*', 'usersStories.id AS id','usersStories.auth0_id AS usersSavedAuth0Id')

    .where('usersStories.auth0_id', auth0_id)
}

function getAllFavorites( db = connection) {
  return db('usersStories')
    .join('stories', 'usersStories.story_id', 'stories.id')
    .select('*', 'usersStories.id AS id','usersStories.auth0_id AS usersSavedAuth0Id')
}

function addFavorite (obj, db = connection) {   
  return db('usersStories').insert(obj)
}

function deleteFavorite(id, db = connection) {
  return db('usersStories').where('id', id).delete()
}


module.exports = {
  getStories,
  getOneStory,
  addStory,
  addStoryRegions,
  getStoriesByUser,
  deleteStory,
  updateStory,
  userCanEdit,
  getUserFavorites, 
  getAllFavorites,
  addFavorite,
  deleteFavorite
}
