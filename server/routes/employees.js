var express = require('express');
var router = express.Router();
var employee = require("../controllers/employee-controller");

// Get all employees
router.get('/', employee.list);

// Get single employee by id
router.get('/view/:id', employee.findById);

// Create employee
router.get('/create', employee.create);

// save employee
router.post('/save', employee.save);

// get employee to edit
router.get('/edit/:id', employee.edit);

// update
router.post('/update/:id', employee.update);

// delete
router.get('/delete/:id', employee.delete);

module.exports = router;
