const ACTIVE_WARNING = document.querySelector('.warning');
const ACTIVE_ERROR = document.querySelector('.error');
const ACTIVE_SUCCESS = document.querySelector('.success');

let elm = document.getElementById('casos');
if (elm.className === ('error')) {
    elm.innerHTML = '<h1> ERROR </h1><p>Ha surgido un error</p>';
} else if (elm.className === ('warning')) {
    elm.innerHTML = '<h1> AVISO </h1><p>Tenga cuidado</p>';
} else if (elm.className === ('success')) {
    elm.innerHTML = '<h1> CORRECTO </h1><p>los datos son correctos</p>';
}