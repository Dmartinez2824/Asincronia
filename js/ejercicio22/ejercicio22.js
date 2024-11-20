const ArrayC = ['rojo', 'verde', 'amarillo', 'naranja', 'negro', 'azul', 'violeta'];

const funcionAsincrona = async () => {
    try {
        await new Promise(resolve => setTimeout(resolve, 3000));
        ArrayC.forEach(color => {
            console.log(color);
        });

    } catch (error) {
        console.error("Hubo un error:", error.message);
    }
}

funcionAsincrona();
