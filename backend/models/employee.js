const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
    employeeID:{
        type: String,
        required: true,
    },
    name:{
        type: String,
    },
    email:{
        type: String,
    },
    phoneNumber:{
        type: Number,
    },
    address:{
        type: String,
    },
    nic:{
        type: String,
        required: true,
    },
    gender:{
        type: String,
    },
    hireDate:{
        type: Date,
    },
    salary:{
        type: Number,
    },
});

module.exports = Employee = mongoose.model("employee", EmployeeSchema);