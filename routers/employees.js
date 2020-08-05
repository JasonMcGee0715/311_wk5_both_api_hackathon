const express = require('express')
const employeesController = require('../controllers/employees')
const router = express.Router()

router.get('/', employeesController.getAllEmployees)

router.get('/:first_name', employeesController.getEmployeeByFirstName)

router.get('/:emp_no', employeesController.getEmployeeById)

router.post('/', employeesController.createNewEmployee)

router.put('/:emp_no', employeesController.updateEmployeeById)

router.delete('/:emp_no', employeesController.deleteEmployeebyId)

module.exports = router