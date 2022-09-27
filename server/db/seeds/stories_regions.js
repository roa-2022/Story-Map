exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('stories_regions').del()
  await knex('stories_regions').insert([
    { id: 1, story_id: 1000, region_id: 2001 },
    { id: 2, story_id: 1001, region_id: 2002 },
    { id: 3, story_id: 1002, region_id: 2003 },
    { id: 4, story_id: 1003, region_id: 2004 },
    { id: 5, story_id: 1004, region_id: 2005 },
  ])
}
