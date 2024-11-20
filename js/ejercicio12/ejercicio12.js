function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("pasaron 3 segundos"); // promisa se imprime despues de 3 seg
        }, ms);
    });
}

delay(3000).then(() => alert("se ejecuta despues de 3 segundos"));