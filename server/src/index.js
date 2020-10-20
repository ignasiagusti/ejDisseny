//Archivo para arrancar la aplicación general
const app = require("./app");

require("./database");

//Indico donde va a escuchar nuestro servidor, lo cojo de app.js
app.listen(app.get("port"), () => {
  console.log(`server on port ${app.get("port")}`);
});
