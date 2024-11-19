let arrayjson = [];
function cargarDatos() {
    try {
        const respuesta =  fetch('datos.json'); // Carga el archivo JSON
        arrayjson = respuesta.json(); // Convierte la respuesta en JSON
    } catch (error) {
        console.log("Error al cargar el archivo JSON:", error.message);
    }
}
function llamar() {
    return new Promise((resolve, reject) => {
        if(arrayjson.length === 0){ //una condicion que me diga si esta vacio el array lanzara el reject
            reject(new Error('esta vacio el arrayjson')) //un nuevo error en el reject
        }
        setTimeout(() => {
            resolve(arrayjson);
        }, 2000);
    })
}


cargarDatos()
    .then(() => llamar()) //llamamos a la funcion data
    .then((llamando) => console.log(llamando)) //si la funcion entra en resolve
    .catch((err) => console.log(err.mensage)) //si la funcion entra en reject

    cargarDatos()
    .then(() => llamar()) // Llama a la función después de cargar los datos
    .then((llamando) => console.log(llamando)) // Si la función entra en resolve
    .catch((err) => console.log(err.message)); // Si la función entra en reject