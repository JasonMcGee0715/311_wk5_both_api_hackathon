const mysql = require('mysql');
const pool = require('../sql/connection');
const { handleSQLError } = require('../sql/error');


const getEmployees =(req, res) =>{
    pool.query("SELECT * FROM employees LIMIT 50", (err, rows)=> {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
});
};



module.exports = {
    getEmployees

}