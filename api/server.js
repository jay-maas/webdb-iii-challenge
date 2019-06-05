const express = require('express')
const helmet = require('helmet')
const cohortsRouter = require('../api/routes/cohortsRouter.js')

const server = express()

server.use(helmet())
server.use(express.json())

server.use('/api/cohorts', cohortsRouter)

server.get('/',  (req, res) => {
    res.send("<p>This server is on</p>")
})

module.exports = server