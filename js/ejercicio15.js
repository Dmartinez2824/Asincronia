function delay(ms) {
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("promise resuelta");
        }, ms);
        setTimeout(() => {
            reject("no se resolvio");
        }, 2000);
    });
    //vemos que por tiempo se resuelve primero el reject y va marcar error
}

delay(3000).then((promesa) => console.log(promesa));