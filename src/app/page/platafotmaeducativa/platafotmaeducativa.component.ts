import { Component } from '@angular/core';

@Component({
  selector: 'app-platafotmaeducativa',
  templateUrl: './platafotmaeducativa.component.html',
  styleUrls: ['./platafotmaeducativa.component.css']
})
export class PlatafotmaeducativaComponent {
  
  abrirPlataforma() {
    const url = 'https://cprotec.net/moodle/';
    window.open(url, '_blank');
  }

}
