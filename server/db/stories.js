const connection = require('./connection')

function getStories(db = connection) {
  return db('regions')
    .join('stories_regions', 'regions.id', 'stories_regions.region_id')
    .join('stories', 'stories_regions.story_id', 'stories.id')
    .select('*')
}

function getOneStory(id, db = connection) {
  return db('regions')
    .join('stories_regions', 'regions.id', 'stories_regions.region_id')
    .join('stories', 'stories_regions.story_id', 'stories.id')
    .select('*')
    .where('stories.id', id)
}

// Add Story

function addStory(newStoryData, db = connection) {
  return db('stories').insert(newStoryData)
}

function addStoryRegions(idObj, db = connection) {
  console.log('idObj', idObj)
  return db('stories_regions').insert(idObj)
}

//only users can del story by themsevles
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

module.exports = {
  getStories,
  getOneStory,
  addStory,
  addStoryRegions,
  getStoriesByUser,
  deleteStory,
  updateStory,
  userCanEdit,
}
