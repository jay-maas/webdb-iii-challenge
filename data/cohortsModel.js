const knex = require('knex')

const knexConfig = require('../knexfile.js')

const db = knex(knexConfig.development)

module.exports = {
    find,
    findById,
    findStudentsById,
    add,
    update,
    remove
}

function find() {
    return db('cohorts')
}

function findById(id) {
    return db('cohorts')
        .where({ id })
        .first()
}

function findStudentsById(id) {
    return db('cohorts')
        .where({ id })
        .first()
}

function add(zoo) {
    return null
}

function update(id, changes) {
    return null
}

function remove(id) {
    return null
}