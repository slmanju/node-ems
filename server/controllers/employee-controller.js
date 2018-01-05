var EmployeeController = {};

EmployeeController.list = function(req, res) {
    Employee.find({}, function (err, employees) {
        if (err) throw err;
        res.render("../views/employee/index", {employees: employees});
    });
};

EmployeeController.findById = function(req, res) {
    Employee.findById(req.params.id, function(err, user) {
      if (err) throw err;
      res.render("../views/employee/show", { employee: employee });
    });
};

EmployeeController.create = function(req, res) {
    res.render("../views/employee/create");
};

EmployeeController.save = function(req, res) {
    var employee = new Employee(req.body);

    employee.save(function(err) {
        if (err) {
            console.log(err);
            res.render("../views/employees/create");
        } else {
            console.log("Successfully created an employee.");
            res.redirect("/employees/show/" + employee._id);
        }
    });
};

EmployeeController.edit = function(req, res) {
    Employee.findOne({_id: req.params.id}).exec(function (err, employee) {
        if (err) throw err;
        res.render("../views/employee/edit", {employee: employee});
    });
};

EmployeeController.update = function(req, res) {
    Employee.findByIdAndUpdate(req.params.id, 
                               { $set: { username: req.body.username, email: req.body.email, password: req.body.password }}, 
                               { new: true }, 
                               function (err, employee) {
        if (err) {
            console.log(err);
            res.render("../views/employee/edit", {employee: req.body});
        }
        res.redirect("/employees/show/"+employee._id);
    });
};

EmployeeController.delete = function(req, res) {
    Employee.findByIdAndRemove(req.params.id, function(err) {
      if (err) throw err;
      console.log("Employee deleted!");
      res.redirect("/employees");
    });
};

module.exports = EmployeeController;
