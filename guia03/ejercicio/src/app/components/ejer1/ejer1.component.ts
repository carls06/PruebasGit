import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-ejer1',
  templateUrl: './ejer1.component.html',
  styleUrls: ['./ejer1.component.css']
})
export class Ejer1Component implements OnInit {
  
isss:number = 0;
afp:number=0;
renta:number=0;
total: number =0;

  forma: FormGroup;
  

  constructor( private fb:FormBuilder ) {
    this.crearFormulario();
    this.cargarDataAlFormulario();


   }

  ngOnInit(): void {
  }
  
  get data()
  {
    return this.forma.get('datoos') as FormArray
  }
 
  get nombreNoValido(){
    return  this. forma.get('nombre').invalid && this.forma.get('nombre').touched

  }

  get SueldoNovalido()
  {
    return  this. forma.get('sueldo').invalid && this.forma.get('sueldo').touched

  }

  crearFormulario()
  {
    this.forma = this.fb.group({

    nombre: ['', Validators.required,],
    sueldo: ['', Validators.required],

    });
  }

  guardar()
  {
    console.log(this.forma);
    
     this.isss = this.forma.get('sueldo').value * 0.073;
     this.renta = this.forma.get('sueldo').value * 0.11;
     this.afp = this.forma.get('sueldo').value*0.051;

   this.total = this.forma.get('sueldo').value - this.isss - this.renta - this.afp;
    
    console.log(this.isss);

    if (this.forma.invalid)
    {
      return Object.values(this.forma.controls).forEach(control => {
        control.markAsTouched();
      });
    }



    console.log()

    //posteo de informacion
    

  }

  cargarDataAlFormulario()
  {
    this.forma.setValue({
      nombre: '',
      sueldo: ''
    });
  }

  

}
