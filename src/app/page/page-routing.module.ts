import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { CapacitacionesComponent } from './capacitaciones/capacitaciones.component';
import { ProductosComponent } from './productos/productos.component';
import { ProduccionComponent } from './produccion/produccion.component';
import { SolucionesComponent } from './soluciones/soluciones.component';
import { PlatafotmaeducativaComponent } from './platafotmaeducativa/platafotmaeducativa.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ServiciopadreComponent } from './serviciopadre/serviciopadre.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  {
    path: 'contactanos',
    component: ContactanosComponent,
  },
  {
    path: 'servicios', component: ServiciopadreComponent,
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
    path: 'plataformaEducativa',
    component: PlatafotmaeducativaComponent,
  },
  {
    path: 'noticias',
    component: NoticiasComponent,
  },
  {
    path: 'nosotros',
    component: NosotrosComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageRoutingModule { }