exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users_stories').del()
  await knex('users_stories').insert([
    { id: 1, story_id: 1000, auth0_id: 'auth0|632d259b6aa7af87dfa37429' },
  ])
}
