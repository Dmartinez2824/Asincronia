// Después de realizar una llamada a un archivo local en formato json, utiliza el método then() 
// para filtrar los datos y mostrar solo los elementos que cumplan ciertos criterios (por ejemplo, 
// mostrar solo los nombres que comiencen con "A"). 

async function leerJson() {
        const respuesta = await fetch('datos.json');
        return await respuesta.json();
}

leerJson().then((data) => {
    const filtrar = data.empleados.filter((empleado) => {
        const primerCaracter = empleado.nombre.charAt(0);
        return primerCaracter === 'A' || primerCaracter === 'a'; // aqui se filtran los nombres que coincidan 
    });

    if (filtrar.length > 0) {
        console.log("Empleados que inician con A:");
        for (let i = 0; i < filtrar.length; i++) {
            console.log(`Nombre: ${filtrar[i].nombre}, Edad: ${filtrar[i].edad}`);
        }
    }else{
        alert("no se encontraron empleados que inicien con a")
    }
});
