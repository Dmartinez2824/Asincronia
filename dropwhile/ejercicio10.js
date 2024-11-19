const dropWhile = require('lodash.dropwhile')

function hola(array, callback) {
    const nuevoarray = takeWhile(array, callback);
    console.log(nuevoarray);
    return nuevoarray;
}

function callback(palabra) {
    return palabra.charAt(0) === 'M';
}

const array = ["Manzana", "Mandarina", "Mango", "Sandia", "señor toronja"];
hola(array, callback);
