import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cliente } from '../model/cliente';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private baseUrl = 'https://appcomprobante.herokuapp.com/apicustomer/customers';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { 
    console.log('Servicio cliente Funcionando');
  }

  // funcion para obtener todos los clientes
  getAllClientes(): Observable<Cliente[]> {
    return this.http.get(this.baseUrl).pipe(
      map(data => data as Cliente[])
    );
  }

  //funcion para obtener un solo cliente (id)
  getOneCliente(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.baseUrl}/${id}`);
  }

  // funcion para crear un nuevo cliente
  createCliente(customer: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.baseUrl, customer, {headers: this.httpHeaders});
  }

  // funcion para actualizar un cliente
  updateCliente(customer: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(this.baseUrl, customer, {headers: this.httpHeaders});
  }

  //funcion para eliminar un cliente
  deleteCliente(id: number): Observable<Cliente> {
    return this.http.delete<Cliente>(`${this.baseUrl}/${id}`, {headers: this.httpHeaders});
  }


}
