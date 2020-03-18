'use strict';
let numero = 0;

numero = parseInt(prompt("Ingrese un número: "));
if (numero === 0) {
    console.log('El número es 0');
    alert('El número es 0');
} else if (numero < 0) {
    console.log('El número es negativo');
    alert('El número es negativo');
} else if (numero > 20 && numero < 50) {
    console.log('El número es mayor que 20 pero menor que 50');
    alert('El número es mayor que 20 pero menor que 50');
} else if (numero >= 12) {
    console.log('El número más 2 es mayor que 13');
    alert('El número más 2 es mayor que 13');
}
if (numero > 0) {} else {
    console.log('el número no es 123123125');
    alert('el número no es 123123125');
}