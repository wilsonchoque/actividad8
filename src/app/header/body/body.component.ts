import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  personas = [
    ['Wilson', 'Choque', '24'], 
  ];

  edad!:Boolean;
  numeroDV!: number;
   
  registrar(nombreInput: String, apellidoInput:String, edadInput: String ){
    this.personas.push([String(nombreInput), String(apellidoInput), String(edadInput)]);
  }

  condicion(numero: String){    
    this.numeroDV = Number(numero);

    if(this.numeroDV>18){
      return this.edad = true;
    }
    else{
      return this.edad = false;
    }

  }

}
