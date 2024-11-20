function delay(ms) {
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("promise resuelta");
        }, ms);
        // reject("no se resolvio");
    });
}

delay(3000).then((promesa) => console.log(promesa));