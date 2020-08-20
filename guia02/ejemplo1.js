"use strict";
/* ejercicio 1 */
var Rombo = /** @class */ (function () {
    function Rombo(diagonalvertical, diagonalhorizontal) {
        this.DiagonalVertical = 0;
        this.DiagonalHorizontal = 0;
        this.DiagonalVertical = diagonalvertical;
        this.DiagonalHorizontal = diagonalhorizontal;
    }
    Rombo.prototype.area = function () {
        return this.DiagonalVertical * this.DiagonalHorizontal;
    };
    return Rombo;
}());
var calculando = new Rombo(2, 2);
console.log(calculando.area());
var Spiderman = {
    nombre: 'Bruno Díaz',
    poderes: ['Trepar', 'Fuerza', 'Agilidad', 'Telas de araña']
};
console.log(Spiderman);
/*ejercicio 3 */
var empleado = /** @class */ (function () {
    function empleado(nombre, salario) {
        this.Nombre = "";
        this.Salario = 0;
        this.Nombre = nombre;
        this.Salario = salario;
    }
    empleado.prototype.descuentos = function () {
        var descAFP = this.Salario * 0.0725;
        var descISSS = this.Salario * 0.03;
        var descTotal = descAFP + descISSS;
        return this.Salario - descTotal;
    };
    return empleado;
}());
var respuesta = new empleado("carlos", 500);
console.log(respuesta.Nombre, respuesta.descuentos());
/* ejercicio 4 */
var calculadora = /** @class */ (function () {
    function calculadora(n1, n2) {
        this.numero = 0;
        this.numeroD = 0;
        this.numero = n1;
        this.numeroD = n2;
    }
    calculadora.prototype.suma = function () {
        var resultado = this.numero + this.numeroD;
        return resultado;
    };
    calculadora.prototype.resta = function () {
        var resultado = this.numero - this.numeroD;
        return resultado;
    };
    calculadora.prototype.multiplicacion = function () {
        var resultado = this.numero * this.numeroD;
        return resultado;
    };
    calculadora.prototype.division = function () {
        if (this.numeroD === 0) {
            console.log('no se puede dividir un numero entre cero');
            return;
        }
        var resultado = this.numero / this.numeroD;
        return resultado;
    };
    return calculadora;
}());
var resp = new calculadora(2, 2);
console.log('suma');
console.log(resp.suma());
console.log('resta');
console.log(resp.resta());
console.log('multiplicacion');
console.log(resp.multiplicacion());
console.log('division');
console.log(resp.division());
