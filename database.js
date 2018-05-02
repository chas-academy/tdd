'use strict'

const createKnex = require('knex')

const knex = createKnex({
  client: 'pg',
  connection: 'postgres://@localhost:5432/chas_academy_tdd'
})

module.exports = knex
