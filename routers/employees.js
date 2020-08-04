const express = require('express')
const employeesController = require('../controllers/employees')
const router = express.Router()


router.get('/:first_name)', employeesController.getEmployeeByFirstName)

router.put(('/:first_name'), employeesController.updateEmployeeByFirstName)

module.exports = router