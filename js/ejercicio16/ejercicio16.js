
// function encadenar(ms) {
//     setTimeout(() =>{
//         const promesa =  new Promise((resolve, reject) => {
//            return resolve(callback());
//         });
//         promesa.then((resultado) => {
//             console.log(resultado);
//             promesa.then((resul) =>{
//                 console.log(resul);

//                 promesa.then((res)=>{
//                 console.log(res);
//                 })
                
//             })
            
            
//         });
//     },ms);
// }
// encadenar(1000);

// function callback() {
//    let numero = Math.random()*100;
//     // console.log(numero);
//     return numero;
// }
function encadenar(ms) {
    setTimeout(() => {
        let total = 0; 
        const promesa = new Promise((resolve) => {
            resolve(callback());
        });

        promesa.then((resultado) => { // se utilizan 3 .then que se encadenan llevandolos al callback y sumando los numeros
                total += resultado;
                console.log(`Resultado 1: ${resultado}`);
                return callback();
            }).then((resultado) => {
                total += resultado;
                console.log(`Resultado 2: ${resultado}`);
                return callback();
            }).then((resultado) => {
                total += resultado;
                console.log(`Resultado 3: ${resultado}`);s
                console.log("Total:", total);
            });
    }, ms);
}

function callback() {
    return Math.floor(Math.random() * 100); // una callback que me da 3 valores randoms // floor una secuencia de 0-100
}

encadenar(2000);

