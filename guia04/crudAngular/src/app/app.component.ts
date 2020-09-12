import { Component } from '@angular/core';
import {Alumno} from './models/alumno'
import { compilePipeFromMetadata } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crudAngular';

  //arreglo del tipo alumno, que tiene 3 registros almacenados
  alumnoArray: Alumno[] = [
    {id:1, name:"Alex", lastname:"Campos",age:35},
    {id:2, name:"Maria", lastname:"Lopez",age:20},
    {id:3, name:"Juan", lastname:"Castro",age:25}
  ]

selectedAlumno:Alumno = {id:0,name:"",lastname:'', age:0}
 

openForEdit(Alumno: Alumno):void
{
  this.selectedAlumno=Alumno;
}

addOrEdit():void
{
  if(this.selectedAlumno.id ===0) //insert
  {
    this.selectedAlumno.id = this.alumnoArray.length+1;
    this.alumnoArray.push(this.selectedAlumno);
  }

  this.selectedAlumno = {id:0, name:'',lastname:'',age:0}
}


delete():void
{
  if(confirm('¿Esta seguro de elimiar el Registro?'))
  {
    this.alumnoArray = this.alumnoArray.filter(x => x != this.selectedAlumno);
    this.selectedAlumno = {id:0, name: '', lastname: '', age:0 };
    }
}
}

