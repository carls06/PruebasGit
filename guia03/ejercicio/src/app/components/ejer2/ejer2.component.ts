import { Component, OnInit, OnChanges } from '@angular/core';
import { NgForm,Form } from '@angular/forms';


@Component({
  selector: 'app-ejer2',
  templateUrl: './ejer2.component.html',
  styleUrls: ['./ejer2.component.css']
})
export class Ejer2Component implements OnInit {

  public valor:any={
        precio:'',
        galones:'',
        pago:'',
        
    }


  constructor() { 

  }

  
combustible:any[]=[
   {
        nombre:'[seleccione combustible]',
        precio:''
    },
    {
     nombre:'Regular',
     precio:'4.05'
    },
    {
    nombre:'Especial',
    precio:'4.25'
    },
    {
    nombre:'Diesel',
    precio:'3.96'
    },
    
];
  ngOnInit(): void {
  }

  


  Guardar(forma:NgForm){
    //console.log(forma);
    if (forma.invalid) {
        return;
    }

    console.log(forma.value);

    console.log(this.valor);
    
    
    this.valor.pago= forma.value.gas*forma.value.galones;
    
 }


}
