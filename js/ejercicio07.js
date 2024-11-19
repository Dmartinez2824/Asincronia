//EJERCICIO 7

function hola(array, callback) {

    array = array.find((palabra) =>{ //find es un metodo que recorre un array y se queda con la primera coincidencia que encuentre
       return callback(palabra);
    });
    console.log(array);
    return array;
}

function callback(palabra){
    return palabra.ciudad === 'Floridablanca' ; 
};

const array = [{
    nombre: 'Daniel',
    ciudad: 'Giron'
},{
    nombre: 'Paola',
    ciudad: 'Floridablanca'
},{
    nombre: 'Juan',
    ciudad: 'Bucaramanga'
},{
    nombre: 'Dayana',
    ciudad: 'Giron'
},{
    nombre: 'Miguel',
    ciudad: 'Floridablanca'}];

hola(array, callback);