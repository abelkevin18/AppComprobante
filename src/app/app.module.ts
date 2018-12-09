import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListClienteComponent } from './components/cliente/list-cliente/list-cliente.component';

// importamos para usar las rutas
import { routes } from './app.routes'; // para el archivo que creamos
import { RouterModule } from '@angular/router'; // propio de angular

// Importar ReactiveFormsModule para los formularios
import { ReactiveFormsModule } from '@angular/forms';

// No olvidar el Httpclient
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListClienteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( routes, { useHash: true } ),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
