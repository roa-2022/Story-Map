exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('storiesregions').del()
  await knex('storiesregions').insert([
    { id: 1, story_id: 1000, region_id: 2008 },
    { id: 2, story_id: 1001, region_id: 2003 },
    { id: 3, story_id: 1002, region_id: 2006 },
    { id: 4, story_id: 1003, region_id: 2003 },
    { id: 5, story_id: 1004, region_id: 2000 },
    { id: 6, story_id: 1005, region_id: 2001 },
    { id: 7, story_id: 1006, region_id: 2000 },
    { id: 8, story_id: 1007, region_id: 2001 },
    { id: 9, story_id: 1008, region_id: 2017 },
  ])
}
