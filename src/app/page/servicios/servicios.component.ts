import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css'],
})
export class ServiciosComponent {
  servicios: any[] = [
    { nombre: 'Hosting y Dominio por un año.', basico: 'OK', profesional: 'OK' , tienda_virtual:'OK'},
    { nombre: 'Creación y diseño de plantilla del sitio web.', basico: 'OK', profesional: 'OK' , tienda_virtual:'OK'},
    { nombre: 'Rediseñar o diseñar logo institucional.', basico: 'OK', profesional: 'OK' , tienda_virtual:'OK'},
    { nombre: 'Crear y diseñar tres artes para el sitio web.', basico: 'OK', profesional: 'OK' , tienda_virtual:'OK'},
    { nombre: 'Opción de galería.', basico: 'OK', profesional: 'OK' , tienda_virtual:'OK'},
    { nombre: 'Redacción de historia, misión y visión.', basico: 'OK', profesional: 'OK' , tienda_virtual:'OK'},
    { nombre: 'Publicación de contenido.', basico: 'OK', profesional: 'OK' , tienda_virtual:'OK'},
    { nombre: 'Integración con redes sociales.', basico: 'OK', profesional: 'OK' , tienda_virtual:'OK'},
    { nombre: 'Creación de base de datos del sitio.', basico: 'OK', profesional: 'OK' , tienda_virtual:'OK'},
    { nombre: 'Información de contacto.', basico: 'OK', profesional: 'OK' , tienda_virtual:'OK'},
    { nombre: 'Certificación de seguridad SSL.', basico: 'OK', profesional: 'OK' , tienda_virtual:'OK'},
    { nombre: 'Adaptada para PC y Móvil.', basico: 'OK', profesional: 'OK' , tienda_virtual:'OK'},
    { nombre: 'Diseño en Cinema 4D.', basico: 'X', profesional: 'OK' , tienda_virtual:'OK'},
    { nombre: 'Formulario de inscripción.', basico: 'X', profesional: 'OK' , tienda_virtual:'OK'},
    { nombre: 'Creación de catálogo de productos o servicios.', basico: 'X', profesional: 'X' , tienda_virtual:'OK'},

  ];
  constructor() {}
}
