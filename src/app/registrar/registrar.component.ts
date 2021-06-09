import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Dato, DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-anadir',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  formulario: FormGroup;

  constructor( private formb: FormBuilder ) {
    this.createForm();
   }

  
  ngOnInit(): void {
  }

  createForm(){
    this.formulario= this.formb.group({
      nombre:[''],
      apellido:[''],
      descripcion: [''],
      sexo: [''],
      empresa: [''],
      celular: [''],
      correo:[''],
    });
  }

  save(){
    
    console.log(this.formulario.value);
  };

}