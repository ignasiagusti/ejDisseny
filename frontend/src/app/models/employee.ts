//Descripcion datos de empleado, con el cual vamos a trabajar
export class Employee {
  constructor(_id = "", identif = "", fullName = "", email = "", usernamePassword = "") {
    this._id = _id;
    this.identif = identif;
    this.fullName = fullName;
    this.email = email;
    this.usernamePassword = usernamePassword;
  }

  _id: string;
  identif: string;
  fullName: string;
  email: string;
  usernamePassword: string;
}
