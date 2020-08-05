const mysql = require('mysql')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')

const getEmployeeByFirstName = (req, res) =>{
    const first_name = req.params.first_name;
    let sql = 'SELECT ?? FROM ?? WHERE ?? = ?'
    sql = mysql.format(sql, ['*', 'employees', 'first_name', first_name])

    pool.query(sql, (err, rows) => {
        if (err) return handleSQLError(res, err)
        // res.send("getting employees...")
        return res.json(rows);
      })
}

const getEmployeeById = (req, res) => {
  const id = req.params.id;
  let sql = `SELECT * FROM ?? WHERE ?? = ?`;
  sql = mysql.format(sql, ['*','employees', 'emp_no', id]);
  
  pool.query(sql, (err, rows) => {
		if(err) return handleSQLError(res, err);
		return res.json(rows)
})
};

const createNewEmployee = (req, res) =>{
    let sql = 'INSERT INTO ?? (??, ??, ??, ??, ??) VALUES (?, ?, ?, ?, ?)'
    let newEmployee = req.body
    const birth_date = newEmployee.birth_date
    const first_name = newEmployee.first_name 
    const last_name = newEmployee.last_name 
    const gender = newEmployee.gender
    const hire_date = newEmployee.hire_date 
    sql = mysql.format(sql, ['employees', 'birth_date', birth_date, 'first_name', first_name, 'last_name', last_name, 'gender', gender, 'hire_date', hire_date])

    pool.query(sql, (err, results) => {
        if (err) return handleSQLError(res, err)
        return res.json({ newId: results.insertId });
      })
}

const updateEmployeeById = (req, res) => {
    const id = req.params.id
    let updatedEmployee = req.body
    const birth_date = updatedEmployee.birth_date
    const first_name = updatedEmployee.first_name 
    const last_name = updatedEmployee.last_name 
    const gender = updatedEmployee.gender
    const hire_date = updatedEmployee.hire_date
    let sql = "UPDATE ?? SET ?? = ?, ?? = ?, ?? = ?, ?? = ?, ?? = ? WHERE ?? = ?"
    sql = mysql.format(sql, ['employees', 'birth_date', birth_date, 'first_name', first_name, 'last_name', last_name, 'gender', gender, 'hire_date', hire_date, 'id', id])
  
    pool.query(sql, (err, results) => {
      if (err) return handleSQLError(res, err)
      return res.status(204).json({ message: `Updated ${results.affectedRows} user(s)` });
    })
  }

module.exports = {
    getEmployeeById,
    getEmployeeByFirstName,
    createNewEmployee,
    updateEmployeeById
};