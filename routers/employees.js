const express = require('express')
const employeesController = require('../controllers/employees')
const router = express.Router()


router.get('/firstname/:first_name)', employeesController.getEmployeeByFirstName)

router.put(('/:id'), employeesController.updateEmployeeById)

module.exports = router