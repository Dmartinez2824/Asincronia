// EJERCICIO 8

function hola(array, callback) {

    array = array.findIndex((palabra) =>{ // findIndex es un metodo que recorre un array 
                                                    // y si encuentra coincidencia lanzara la posicion del array que se encuentra la coincidencia 
       return callback(palabra);
    });
    console.log(array);
    return array;
}

function callback(palabra){
    return palabra === 'Naranja' ; //llegado el caso que findIndex no encuentre coincidencia lanzara "-1"
};

const array = ["Manzana", "Banana", "Sandia", "Naranja", "Papaya"];

hola(array, callback);