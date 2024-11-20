function imprimirNumeros(desde, hasta) {
    desde = 5;//inicializacion
    hasta = 16; //delimitacion
    // Se crea un ciclo for para que se repita la impresión de los números
    for (let i = desde; i <= hasta; i++) {
        setTimeout(() => {
            // Se imprime indefinidamente y incrementa el número
            console.log(i);
            if (i === hasta) {
                // Muestra el mensaje final
                console.log("Finished");
            }
        }, 2000);
    }
}

imprimirNumeros();