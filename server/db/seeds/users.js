/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = (knex) => {
  return knex('users')
    .del()
    .then(() =>
      knex('users').insert([
        {
          auth0_id: 'auth0|123',
          username: 'amy',
          email: 'user1@hotmail.com',
        },
        {
          auth0_id: 'auth0|456',
          username: 'matt',
          email: 'user2@hotmail.com',
        },
        {
          auth0_id: 'auth0|632d259b6aa7af87dfa37429',
          username: 'Admin',
          email: 'admin@hotmail.com',
        },
      ])
    )
}
