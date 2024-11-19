function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("pasaron 3 segundos");
        }, ms);
    });
}

delay(3000).then(() => alert("se ejecuta despues de 3 segundos"));