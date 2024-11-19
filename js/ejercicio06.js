// EJERCICIO 6

function hola(array, callback) {

    array = array.some((boolean) =>{
       return callback(boolean);
    });
    console.log(array);
    return array;
}

function callback(boolean){
    return boolean === 10 ; //esta condicion al contrario de every es si 
                            //solo hay almenos una coincidencia lanzara true, de lo contrario false
};

const array = [1,2,3,4,5,6,7,8,9,10,11,12];

hola(array, callback);