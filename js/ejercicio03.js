//3
function hola(array, callback){
    
    const nuevoarray = array.map((i) =>{
         return callback(i);  
        
    })
    console.log(nuevoarray);
    
    
}

function callback(i) {
    return i/2;
}

const array = [2,5,6,7,9];
hola(array, callback);
