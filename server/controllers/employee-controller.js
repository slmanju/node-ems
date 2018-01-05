var EmployeeController = {};

EmployeeController.list = function(req, res) {
    res.send('find all');
};

EmployeeController.findById = function(req, res) {
    res.send('find by id');
};

EmployeeController.create = function(req, res) {
    res.send('render create form');
};

EmployeeController.save = function(req, res) {
    res.send('save new employee');
};

EmployeeController.edit = function(req, res) {
    res.send('render edit form');
};

EmployeeController.update = function(req, res) {
    res.send('update employee');
};

EmployeeController.delete = function(req, res) {
    res.send('delete employee');
};

module.exports = EmployeeController;
