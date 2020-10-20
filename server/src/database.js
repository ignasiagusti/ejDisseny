const mongoose = require("mongoose");

const URI = "mongodb://localhost/mean-crud";

mongoose.connect(URI, {   //Se conecta a la URI especificada
    useNewUrlParser: true, //Config para evitar los warnings de mongoose
    useUnifiedTopology: true,
    useFindAndModify: false  //Para evitar error al actualizar
  })
  .then((db) => console.log("db connected")) //Conexion con la db
  .catch((err) => console.error(err)); //Si no se ha podido conectar

module.exports = mongoose;
