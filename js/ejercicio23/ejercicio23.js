// Realiza una llamada a un archivo local en formato json y maneja posibles errores utilizando 
// try/catch para mostrar un mensaje de error en caso de fallo. 

const leer = async () => {
    try {
        const respuesta = await fetch("data.json");
        return await respuesta.json();
    } catch (error) {
        console.log("Tiempo de carga caducado");
    }
};

leer().then((data) => {
    if (data) {
        for (let i = 0; i < data.length; i++) {
            const usuario = data[i];
            console.log("\n");
    
            console.log(usuario.nombre);
            console.log(usuario.edad);
            console.log(usuario.empresa);
            console.log(usuario.animal);
        }
    }
});
