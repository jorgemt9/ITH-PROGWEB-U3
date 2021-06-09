import { Component, OnInit } from '@angular/core';
import { Dato, DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-lista',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  datos : Array<Dato> = []

  constructor(private servicioHeroes : DatosService) {
    this.datos = this.servicioHeroes.getDatos();
    console.log(this.datos)
   }

  ngOnInit(): void {
  }
}