
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('saved_stories').del()
  await knex('saved_stories').insert([
    {id: 1, auth0_id: 'auth0|123', story_id: "1000" },
  ]);
};
