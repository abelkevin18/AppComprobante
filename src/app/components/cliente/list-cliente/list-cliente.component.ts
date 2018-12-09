import { Component, OnInit } from '@angular/core';

import { Cliente } from '../../../model/cliente';
import { ClienteService } from '../../../services/cliente.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-cliente',
  templateUrl: './list-cliente.component.html',
  styles: []
})
export class ListClienteComponent implements OnInit {
  clientes: Cliente[];
  constructor(private router: Router, private service: ClienteService, private formBuilder: FormBuilder) { }

  addForm: FormGroup;

  ngOnInit() {
    this.service.getAllClientes().subscribe(
      data => (this.clientes = data)
    );

    this.addForm = this.formBuilder.group({
      codigocliente: [],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required]
    });
  }

  onSubmit() {
    this.service.createCliente(this.addForm.value)
      .subscribe(data => {
        //this.router.navigate(['list-cliente']);
        this.service.getAllClientes().subscribe(
          datas => (this.clientes = datas)
        );
        swal({
          position: 'top',
          type: 'success',
          title: `Cliente creado con éxito`,
          showConfirmButton: false,
          timer: 2000
        });
        //window.location.reload();
      });
  }

  deleteCustomer(customer: Cliente): void {
    swal({
      title: 'Está seguro?',
      text: `¿Seguro desea eliminar al cliente ${customer.nombre} ${
        customer.apellido
        }?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then(result => {
      if (result.value) {
        this.service.deleteCliente(customer.codigocliente).subscribe(data => {
          this.clientes = this.clientes.filter(c => c !== customer);
        });

        swal('Eliminado!', 'Se ha eliminado el cliente.', 'success');
      }
    });
  }

}
