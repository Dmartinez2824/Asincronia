//3
function hola(array, callback){
    
    const nuevoarray = array.map((i) =>{ //MAP es un mapeo de todo el array, uno a uno los va diviediendo
         return callback(i);  
        
    })
    console.log(nuevoarray);
    
    
}

function callback(i) {
    return i/2;
}

const array = [2,5,6,7,9];
hola(array, callback);
