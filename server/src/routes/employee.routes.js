const express = require("express");
const router = express.Router(); //Para guardar urls 'rutas'

/*Instanciamos controlador donde están definidos los métodos para ejectuar en el caso de crear, leer, borrar, etc.*/
const employee = require("../controllers/employee.controller");

router.get("/", employee.getEmployees);
router.post("/", employee.createEmployee);
router.get("/:id", employee.getEmployee);
router.put("/:id", employee.editEmployee);
router.delete("/:id", employee.deleteEmployee);

module.exports = router; //Exportamos el router para poder usarlo desde el navegador por ejemplo.
