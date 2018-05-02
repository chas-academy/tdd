'use strict'

const db = require('../database')

function createTable() {
    return db.schema.createTable('users', (table) => {
        table.increments()
        table.string('name', 255)
        table.timestamps()    
    })
}

module.exports = {
    createTable    
}