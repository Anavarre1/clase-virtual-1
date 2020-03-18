'use strict';

document.getElementById('win1').addEventListener('mouseover', winner1);
document.getElementById('win2').addEventListener('mouseover', winner2);

function winner1(e) {
    document.querySelector("h2").innerHTML = '<h2>La Geek Girl seleccionada es: Ana</h2>';
    e.preventDefaul();
}

function winner2(e) {
    document.querySelector("h2").innerHTML = "< h2 > La Geek Girl seleccionada es: Carolina < /h2>";
    e.preventDefaul();
}