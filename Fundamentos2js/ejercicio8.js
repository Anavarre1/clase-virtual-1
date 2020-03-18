'use strict';
const firstDogImage = 'https://dam.ngenespanol.com/wp-content/uploads/2019/06/mirada-perros.png';
const firstDogName = 'Dina';

const secondDogImage = 'https://www.todoperros.com/wp-content/uploads/2016/08/nombres-de-perros.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_curiosidad__small/public/articulos/perro-infecciones.jpg';
const thirdDogName = 'Lana';

document.querySelector('.first').innerHTML = `<h1>${firstDogName}</h1><img src="${firstDogImage}" alt="">`;
document.querySelector('.second').innerHTML = `<h1>${secondDogName}</h1><img src="${secondDogImage}" alt="">`;
document.querySelector('.third').innerHTML = `<h1>${thirdDogName}</h1><img src="${thirdDogImage}" alt="">`;