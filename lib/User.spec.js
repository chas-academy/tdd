'use strict'

const User = require('./User')
const expect = require('chai').expect
const db = require('../database');

// Load the module and make sure that it finds
// the function bla() in it
describe('User', () => {
    describe('createTable', () => {
        function houseKeeping() {
            return db.schema.dropTableIfExists('users');
        }

        before(houseKeeping)
        after(houseKeeping)

        it('should export a function called createTable', () => {
            expect(User.createTable).to.be.a('function')
        })

        // // it should return a promise
        // it('should return a promise', () => {
        //     const userCreateTablePromise = User.createTable()
        //     expect(userCreateTablePromise).to.be.a('Promise')
        //     // expect(userCreateTablePromise.then).to.be.a('function')
        //     // expect(userCreateTablePromise.catch).to.be.a('function')
        // })
        
        // create the table named users
        it('should create a table called users', function * () {
            yield User.createTable()
            const dbHasUsersTable = yield db.schema.hasTable('users')

            expect(dbHasUsersTable).to.be.true
            
            // User.createTable()
            //     .then(() => db.schema.hasTable('users'))
            //     .then((dbHasUsersTable) => expect(dbHasUsersTable).to.be.true)
        })

    })
})