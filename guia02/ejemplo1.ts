/* ejercicio 1 */
class Rombo
{
    DiagonalVertical: number = 0;
     DiagonalHorizontal: number = 0;

    constructor(diagonalvertical: number, diagonalhorizontal:number)
    {
        this.DiagonalVertical=diagonalvertical;
        this.DiagonalHorizontal=diagonalhorizontal;
    }

    area()
    {
        return this.DiagonalVertical * this.DiagonalHorizontal;
    }

}

var calculando = new Rombo(2,2);

console.log(calculando.area());


/*ejercicio 2 */

interface Spiderman {
    nombre: string;
    poderes:string[];
  }

  const Spiderman: Spiderman = {
    nombre: 'Bruno Díaz',
    poderes: ['Trepar','Fuerza','Agilidad','Telas de araña']
  }

  console.log(Spiderman);

  /*ejercicio 3 */
class empleado
{
    Nombre: string= "";
    Salario: number=0;
    constructor(nombre: string, salario:number)
    {
        this.Nombre = nombre;
        this.Salario = salario;
    }

    descuentos()
    {
        let descAFP = this.Salario * 0.0725;
        let descISSS = this.Salario * 0.03;
        let descTotal = descAFP + descISSS;
        return this.Salario - descTotal;
    }

    
    

}

var respuesta = new empleado("carlos",500);
    
console.log( respuesta.Nombre, respuesta.descuentos());

/* ejercicio 4 */

class calculadora{

     numero:number=0;
      numeroD:number=0;

    constructor(n1:number, n2: number){
        this.numero=n1;
        this.numeroD=n2;

    }
    suma(){
        let resultado = this.numero + this.numeroD;
        return resultado;
    }
    resta(){
        let resultado = this.numero - this.numeroD;
        return resultado;
    }
    multiplicacion(){
        let resultado = this.numero * this.numeroD;
        return resultado;
     }
    division(){
        if(this.numeroD===0){

            console.log('no se puede dividir un numero entre cero');
            return;
            
        }
        let resultado = this.numero / this.numeroD;
        return resultado;
    }

    
    
    
}
let resp = new calculadora(2,2);
console.log('suma');
console.log(resp.suma());
console.log('resta');
console.log(resp.resta());
console.log('multiplicacion');
console.log(resp.multiplicacion());
console.log('division');
console.log(resp.division());


