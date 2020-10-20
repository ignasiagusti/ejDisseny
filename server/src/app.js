//Codigo del server
const express = require("express"); /*Nos permite crear las rutas para nuestro servidor*/
const cors = require("cors");   //Para evitar error al comunicarse con distintos puertos entre serv y client
const morgan = require("morgan");
const app = express();

// Config
app.set("port", process.env.PORT || 3000); //Escoge puerto predef. o si el indicado

// Middlewares
// const corsOptions = {origin: "http://localhost:4200"}  /*Para que acepte solo este puerto especifico
app.use(cors());
app.use(morgan("dev")); //Escucha las peticiones que van llegando y las muestra por consola
app.use(express.json()); //Para que express pueda entender json

// Cargamos las rutas, por defecto todas van a tener /api/employees
app.use("/api/employees", require("./routes/employee.routes"));

module.exports = app;
