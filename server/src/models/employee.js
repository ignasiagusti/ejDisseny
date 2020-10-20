//Especifico lo que voy a guardar en mi base de datos
const mongoose = require("mongoose");
const { Schema } = mongoose; 

const employeeSchema = new Schema(   //Esquema --> lo que guardaré (datos)
  {
    identif: { type: String, required: true },
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    usernamePassword: { type: String, required: true },
  },
  {
    versionKey: false, //Eliminar el param por def. de mongoose
    timestamps: true, //Param para guardar tiempo nuevo dato y ult vez actualizado
  }
);

module.exports = mongoose.model("Employee", employeeSchema); //Modelo para bsucar y modificar los datos guardados
