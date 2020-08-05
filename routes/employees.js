const express = require('express')
const app = express()
const router = express.Router()



router.get('/', controller.getEmployees)




module.exports = router;
