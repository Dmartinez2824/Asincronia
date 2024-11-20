// Crea una función asincrónica que realice una llamada a un archivo local en formato json y 
// luego manipule los datos recibidos para mostrar información específica. 

async function diferenciarPorEdad() {
    try {
        const respuesta = await fetch('datos.json');
        const data = await respuesta.json();

        const mayoresDeEdad = data.empleados.filter((empleado) => empleado.edad >= 18); //filtrar mayores de edad
        const menoresDeEdad = data.empleados.filter((empleado) => empleado.edad < 18); //filtrar menores de edad

        //imprimir
        console.log("Mayores de edad:");
        for (let i = 0; i < mayoresDeEdad.length; i++) {
            console.log(`Nombre: ${mayoresDeEdad[i].nombre}, Edad: ${mayoresDeEdad[i].edad}`);
        }
        
        console.log("\nMenores de edad:");
        for (let i = 0; i < menoresDeEdad.length; i++) {
            console.log(`Nombre: ${menoresDeEdad[i].nombre}, Edad: ${menoresDeEdad[i].edad}`);
        }
    } catch (error) {
        console.error("Hubo un error:", error.message);
    }
}
diferenciarPorEdad();
