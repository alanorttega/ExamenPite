import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaJuguetesComponent } from './components/lista-juguetes/lista-juguetes.component';
import { AddorEditComponent } from './components/addor-edit/addor-edit.component';

const routes: Routes = [
  { path: '', component: ListaJuguetesComponent},
  { path: 'agregar', component: AddorEditComponent},
  { path: 'editar/:id', component: AddorEditComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
