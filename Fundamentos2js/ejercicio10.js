'use strict';
let edad = 0,
    horasVividas = 0;
edad = parseInt(prompt("Ingrese su edad actual en años: "));
horasVividas = edad * (365.25 * 24);
console.log('El total aproximado de horas vividas en ' + edad + ' años es de: ' + horasVividas + ' Horas');
document.querySelector("h1").innerHTML = ('El total aproximado de horas vividas en ' + edad + ' años es de: ' + horasVividas + ' Horas');