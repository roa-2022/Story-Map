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

function addStory(newStoryData, db = connection) {
  return db('stories').insert(newStoryData, 'id')
}

function addStoryRegions(idObj, db = connection) {
  return db('stories_regions').insert(idObj, 'id')
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

function getUserSavedStories(auth0_id, db = connection) {
  return db('users_stories')
    .join('stories', 'users_stories.story_id', 'stories.id')
    .select(
      '*',
      'users_stories.id AS id',
      'users_stories.auth0_id AS usersSavedAuth0Id'
    )

    .where('users_stories.auth0_id', auth0_id)
}

function getAllUserSavedStories(db = connection) {
  return db('users_stories')
    .join('stories', 'users_stories.story_id', 'stories.id')
    .select(
      '*',
      'users_stories.id AS id',
      'users_stories.auth0_id AS usersSavedAuth0Id'
    )
}

function addSavedStory(obj, db = connection) {
  return db('users_stories').insert(obj, 'id')
}

function deleteSaved(id, db = connection) {
  return db('users_stories').where('id', id).delete()
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
  getUserSavedStories,
  getAllUserSavedStories,
  addSavedStory,
  deleteSaved,
}
