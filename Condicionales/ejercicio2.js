'use strict';
let nombre1 = 'Dubenis',
    nombre2 = 'Andrea',
    entrada;

entrada = prompt("Ingrese su nombre: ");

if (entrada === nombre1 || entrada === nombre2) {
    alert('Bienvenida, ' + entrada);
} else {
    alert("Lo siento pero el usuario que has introducido no está registrado");
}