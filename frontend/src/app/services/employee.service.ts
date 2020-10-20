//Para comunicarnos con el backend, lo haremos a traves de este archivo
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"; //metodo http que nos permite hacer posts/get/delete etc

import { Employee } from "../models/employee"; //Importo los datos que va a tener un empleado

@Injectable({
  providedIn: "root",
})
export class EmployeeService {
  selectedEmployee: Employee; 
  employees: Employee[];
  readonly URL_API = "http://localhost:3000/api/employees";   //url donde tengo el servidor ejecutandose, al cual vamos a consultar y enviar datos

  constructor(private http: HttpClient) {  //instanciamos un http
    this.selectedEmployee = new Employee();
  }

  postEmployee(employee: Employee) {
    return this.http.post(this.URL_API, employee);
  }

  getEmployees() {
    return this.http.get<Employee[]>(this.URL_API);  //Nos va a devolver String con los clientes
  }

  putEmployee(employee: Employee) {
    return this.http.put(this.URL_API + `/${employee._id}`, employee); //cogemos el id interno de mongo db para consultar los datos de ese cliente en particular, lo introduciremos a la peticion http put con la URL para la appi + el identif del cliente en cuestion
  }

  deleteEmployee(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
