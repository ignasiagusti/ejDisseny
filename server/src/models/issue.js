const Employee = require("./models/employee");


//Especifico lo que voy a guardar en mi base de datos
const mongoose = require("mongoose");
const { Schema } = mongoose; 

const issueSchema = new Schema(   //Esquema --> lo que guardaré (datos)
  {
    id: { type: String, required: true },
    title: { type: String, required: true },
    date: { type: timestamps, required: true },
    upDate: { type: timestamps, required: true },
    issueLevel: { type: String['LOW', 'MEDIUM', 'HIGH'], required: true },
    issueState: { type: String['OPEN', 'CLOSED'], required: true},
    user: { type: Employee, required: true },
  },
  {
    versionKey: false, //Eliminar el param por def. de mongoose
    timestamps: true, //Tambien puedo usar est
  }
);

module.exports = mongoose.model("Issue", issueSchema); //Modelo para buscar y modificar los datos guardados