'use strict';
let numero = 0;

numero = parseInt(prompt("Ingrese un los años de vida actuales del perro: "));
if (numero === 1) {
    console.log('El perro tiene 15 años equivalentes humanos');
    alert('El perro tiene 15 años equivalentes humanos');
} else if (numero === 2) {
    console.log('El perro tiene 24 años equivalentes humanos');
    alert('El perro tiene 24 años equivalentes humanos');
} else if (numero >= 3) {
    console.log('El perro tiene ' + (((numero - 2) * 5) + 24) + 'Años equivalentes humanos');
    alert('El perro tiene ' + (((numero - 2) * 5) + 24) + ' Años equivalentes humanos');
} else if (numero < 0) {
    console.log('Por favor ingrese valores enteros, mayores a 0');
    alert('Por favor ingrese valores enteros, mayores a 0');
} else {
    console.log('Dato ingresado no valido');
    alert('Dato ingresado no valido');
}