var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var employeeSchema = new Schema({
    firstName:{ type: String, required: true },
    lastName:{ type: String, required: true },
    email: { type: String, required: true },
    password: String
});

var Employee = mongoose.model("employee", employeeSchema);

module.exports = Employee;
