const express = require('express')
const helmet = require('helmet')
const timestamp = require('time-stamp')

const cohortsRouter = require('../api/routes/cohortsRouter.js')

const server = express()

server.use(helmet())
server.use(logger)
server.use(express.json())

server.use('/api/cohorts', cohortsRouter)

server.get('/',  (req, res) => {
    res.send("<p>This server is on</p>")
})

function logger(req, res, next) {
    console.log(`A ${req.method} request to ${req.url} at ${timestamp.utc('HH:mm:ss on MM/DD/YYYY')}`)
    next()
}

module.exports = server