import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { RegistrarComponent } from './registrar/registrar.component';


const routes: Routes = [
  {path: 'contacto' , component: ContactoComponent },
  {path: 'registrar', component: RegistrarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
