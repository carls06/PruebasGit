"use strict";
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
