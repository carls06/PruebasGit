
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


interface Spiderman {
    nombre: string;
    poderes:string[];
  }

  const Spiderman: Spiderman = {
    nombre: 'Bruno Díaz',
    poderes: ['Trepar','Fuerza','Agilidad','Telas de araña']
  }

  console.log(Spiderman);

  






