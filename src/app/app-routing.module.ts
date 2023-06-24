import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactanosComponent } from './page/contactanos/contactanos.component';
import { CapacitacionesComponent } from './page/capacitaciones/capacitaciones.component';
import { ProductosComponent } from './page/productos/productos.component';
import { ProduccionComponent } from './page/produccion/produccion.component';
import { SolucionesComponent } from './page/soluciones/soluciones.component';
import { ServiciosComponent } from './page/servicios/servicios.component';
import { ServiciospadreComponent } from './page/serviciospadre/serviciospadre.component';
import { PlatafotmaeducativaComponent } from './page/platafotmaeducativa/platafotmaeducativa.component';
import { NoticiasComponent } from './page/noticias/noticias.component';
import { InicioComponent } from './page/inicio/inicio.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {
    path: 'page/contactanos',
    component: ContactanosComponent,
  },
  {
    path: 'page/servicios',
    component: ServiciospadreComponent,
    children: [
      {
        path: '',
        component: ServiciosComponent,
      },
      {
        path: 'capacitaciones',
        component: CapacitacionesComponent,
      },
      {
        path: 'productos',
        component: ProductosComponent,
      },
      {
        path: 'producción',
        component: ProduccionComponent,
      },
      {
        path: 'soluciones',
        component: SolucionesComponent,
      },
    ],
  },
  {
    path: 'page/productos', component: PlatafotmaeducativaComponent
  },{
    path: 'page/noticias', component: NoticiasComponent
  }

  /*
 , {
    path: '404', component: NotFoundComponent
  },
  {
    path: '**', redirectTo: '404'
  }
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
