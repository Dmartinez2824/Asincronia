function hola(array, callback) {
    const nuevoarray = _.dropWhile(array, callback);
    console.log(nuevoarray);
    return nuevoarray;
}

function callback(palabra) {
    return palabra.charAt(0) === 'M';
}

const array = ["Manzana", "Mandarina", "Mango", "Naranja", "Papaya"];
hola(array, callback);