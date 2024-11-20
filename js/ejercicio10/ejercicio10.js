// 10. Crear una función takeWhile que acepte un array y un callback y que: 
// • por cada elemento del array ejecute el callback pasándole dicho elemento como 
// argumento 
// • devuelva un array con los elementos hasta el primer callback que devolvió false 
// • (Inverso del dropWhile) 

const _ = require('lodash');

function hola(array, callback) {
    const nuevoarray = _.takeWhile(array, callback); //rakewhile coje de todo el arreglo lo que tiene coincidencia, lo guarda en una array 
    console.log(nuevoarray);
    return nuevoarray;
}

function callback(palabra) {
    return palabra.charAt(0) === 'M'; //palabra que en la posicion 0 tengan M
}

const array = ["Manzana", "Mandarina", "Mango", "Sandia", "señor toronja"];
hola(array, callback);
