const mysql = require('mysql')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')

const getEmployeeByFirstName = (req, res) =>{
    const first_name = req.params.first_name;
    let sql = 'SELECT ?? FROM ?? WHERE ?? = ?'
    sql = mysql.format(sql, ['*', 'employees', 'first_name', first_name])

    pool.query(sql, (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json(rows);
      })
}

const updateEmployeeByFirstName = (req, res) => {
    const by_first_name = req.params.first_name
    let updatedEmployee = req.body
    const birth_date = updatedEmployee.birth_date
    const first_name = updatedEmployee.first_name 
    const last_name = updatedEmployee.last_name 
    const gender = updatedEmployee.gender
    const hire_date = updatedEmployee.hire_date
    let sql = "UPDATE ?? SET ?? = ?, ?? = ?, ?? = ?, ?? = ?, ?? = ? WHERE ?? = ?"
    sql = mysql.format(sql, ['employees', 'birth_date', birth_date, 'first_name', first_name, 'last_name', last_name, 'gender', gender, 'hire_date', hire_date, 'first_name', by_first_name])
  
    pool.query(sql, (err, results) => {
      if (err) return handleSQLError(res, err)
      return res.status(204).json({ message: `Updated ${results.affectedRows} user(s)` });
    })
  }

module.exports = {
    getEmployeeByFirstName,
    updateEmployeeByFirstName
}