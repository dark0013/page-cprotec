import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactanosComponent } from './page/contactanos/contactanos.component';
import { CapacitacionesComponent } from './page/capacitaciones/capacitaciones.component';
import { SolucionesComponent } from './page/soluciones/soluciones.component';

const routes: Routes = [
  {
    path: 'page/contactanos', component: ContactanosComponent
  },{
    path: 'page/capacitaciones', component: CapacitacionesComponent
  },{
    path:'page/Soluciones',component:SolucionesComponent
  }
  /*{
    path: '', component: ContactanosComponent
  }, {
    path: '404', component: NotFoundComponent
  },
  {
    path: '**', redirectTo: '404'
  }
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
