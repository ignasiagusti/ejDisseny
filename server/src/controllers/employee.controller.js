//Controlador que contiene el codigo de las funciones para crear, leer, etc.

const Employee = require("../models/employee"); //Cargo los esquemas(datos) de la db

const employeeCtrl = {};

employeeCtrl.getEmployees = async (req, res, next) => {
  const employees = await Employee.find();  //Devuelve String
  res.json(employees);
};

employeeCtrl.createEmployee = async (req, res, next) => {
  const employee = new Employee({ //La info del cliente se encuentra en body
    identif: req.body.identif, 
    fullName: req.body.fullName,
    email: req.body.email,
    usernamePassword: req.body.usernamePassword,
  });
  await employee.save();
  res.json({ status: "Cliente creado" });
};

employeeCtrl.getEmployee = async (req, res, next) => {
  const { id } = req.params;
  const employee = await Employee.findById(id);
  res.json(employee);
};

employeeCtrl.editEmployee = async (req, res, next) => {
  const { id } = req.params;
  await Employee.findByIdAndUpdate(id, {$set: req.body}, {new: true});
  res.json({ status: "Cliente actualizado" });
};

employeeCtrl.deleteEmployee = async (req, res, next) => {
  await Employee.findByIdAndRemove(req.params.id);
  res.json({ status: "Cliente borrado" });
};

module.exports = employeeCtrl;
