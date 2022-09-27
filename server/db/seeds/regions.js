exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('regions').del()
  await knex('regions').insert([
    {
      id: 2000,
      name: 'New Zealand',
    },
    {
      id: 2001,
      name: 'North Island',
    },
    {
      id: 2002,
      name: 'South Island',
    },
    {
      id: 2003,
      name: 'Northland',
    },
    {
      id: 2004,
      name: 'Auckland',
    },
    {
      id: 2005,
      name: 'Waikato',
    },
    {
      id: 2006,
      name: 'Bay of Plenty',
    },
    {
      id: 2007,
      name: 'Gisborne',
    },
    {
      id: 2008,
      name: "Hawke's Bay",
    },
    {
      id: 2009,
      name: 'Taranaki',
    },
    {
      id: 2010,
      name: 'Manawatū-Whanganui',
    },
    {
      id: 2011,
      name: 'Wellington',
    },
    {
      id: 2012,
      name: 'Tasman',
    },
    {
      id: 2013,
      name: 'Nelson',
    },
    {
      id: 2014,
      name: 'Marlborough',
    },
    {
      id: 2015,
      name: ' West Coast',
    },
    {
      id: 2016,
      name: 'Canterbury',
    },
    {
      id: 2017,
      name: 'Otago',
    },
    {
      id: 2018,
      name: 'Southland',
    },
  ])
}
