const express = require("express");
const bodyParser = require("body-parser");
const employeesRouter = require('./routers/employees');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 4003;

app.use(bodyParser.json())
app.use('/employees', employeesRouter)

//get Employee By Id (emp_no)
app.get('/getEmployee/:emp_no', (req, res) => {
		res.send('Getting employees...')
});

app.get('/', (req, res) => {
    res.send('Welcome to our hackathon!')
  })

app.listen(port, () => {
    console.log(`Web server is listening on port ${port}!`);
   });
