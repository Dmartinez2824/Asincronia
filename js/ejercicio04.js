
//4. Crear una función filter que acepte un array y un callback y que: 
//• por cada elemento del array ejecute el callback pasándole dicho elemento como 
//argumento 
//• sí dicho callback devuelve true, pushea el elemento a un nuevo array 
//• devuelva el array final con los elementos que pasaron el "filtro".

//EJERCICIO 4
    function filtrar(array, callback) {
        const nuevoArray = array.filter((palabra) => {
            return callback(palabra);
        });
    
        console.log(nuevoArray); 
        return nuevoArray;     
    }
    
    function callback(palabra) {
        return palabra.nombre?.match(/^a/i) && palabra.edad > 17;
    }
    
    let array = [
        { nombre: "ana", edad: 19 },
        { nombre: "berenice", edad: 7 },
        { nombre: "daniel", edad: 21 },
        { nombre: "angel", edad: 18 },
        { nombre: "miguel", edad: 16 }
    ];
    
    filtrar(array, callback);
    