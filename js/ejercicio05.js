//EJERCICIO 5
function hola(array, callback) {

    const nuevoarray = array.every((boolean) =>{
       return callback(boolean);
    });
    console.log(nuevoarray);
    return nuevoarray;
}

function callback(boolean){
    return boolean <= 10 ; //condicion de que se cumpla el array
                        //es de forma general, que todo el array sea menor a 10
                        //si hay un valor dentro del array mayor a 10 lanzara false
};

const array = [1,2,3,4,5,6,7,8,9,10];

hola(array, callback);