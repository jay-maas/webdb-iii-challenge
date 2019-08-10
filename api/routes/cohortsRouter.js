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


router.get('/:id', validateCohortId, async (req, res) => {
    try {
        const cohort = await Cohorts.findById(req.cohort.id)
        res.status(200).json(cohort)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

router.get('/:id/students', validateCohortId, async (req, res) => {
    try {
        const studentsOfCohort = await Cohorts.findStudentsById(req.cohort.id)
        res.status(200).json(studentsOfCohort)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

router.post('/', validateCohort, async (req, res) => {
    try {
        const newCohort = await Cohorts.add(req.validCohort)
        res.status(201).json(newCohort)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

router.put('/:id', validateCohortId, validateCohort, async (req, res) => {
    try {
        const updatedCohort = await Cohorts.update(req.cohort.id, req.validCohort)
        res.status(201).json(updatedCohort)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

router.delete('/:id', validateCohortId, async (req, res) => {
    try {
        const deletedCohort = await Cohorts.remove(req.cohort.id)
        res.status(200).json(deletedCohort)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

async function validateCohortId(req, res, next) {
    const cohort = await Cohorts.findById(req.params.id)
    console.log(cohort)
    if (cohort) {
        req.cohort = cohort
        next()
    } else {
        res.status(404).json({
            error: "Could not find a cohort by that ID"
        })
    }
}

function validateCohort(req, res, next) {
    if (!isEmpty(req.body)) {
        if (req.body.name) {
            req.validCohort = {
                name: req.body.name
            }
            next()
        } else {
            res.status(400).json({
                errorMessage: 'Missing required name. Please do not submit any other key:values in this post request!'
            })
        }
    } else {
        res.status(400).json({
            errorMessage: 'Missing cohort data.'
        })
    }
}

function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key)
        )
            return false
    }
    return true
}

module.exports = router