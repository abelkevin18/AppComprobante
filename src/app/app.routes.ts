import { Routes } from '@angular/router';

import { ListClienteComponent } from './components/cliente/list-cliente/list-cliente.component';


export const routes: Routes = [
    { path: 'list-cliente', component: ListClienteComponent },
    { path: '', pathMatch: 'full', redirectTo: 'list-cliente' },
    { path: '**', pathMatch: 'full', redirectTo: 'list-cliente' }
];