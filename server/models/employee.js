var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var employeeSchema = new Schema({
    username:{ type: String, required: true },
    email: String,
    password: String
});

var Employee = mongoose.model("employee", employeeSchema);

module.exports = Employee;
