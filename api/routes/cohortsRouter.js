const router = require('express').Router()

const Cohorts = require('../../data/cohortsModel.js')

router.get('/', async (req, res) => {
    try {
        const cohorts = await Cohorts.find()
        res.status(200).json(cohorts)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

module.exports = router