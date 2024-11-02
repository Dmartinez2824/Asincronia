//monohilo
let i = 0;

setTimeout(() => alert(i), 100); //lee esto y pasa de frente por el intervalo de 100 ms

for(let j = 0; j < 10000000; j++){ // entra al for, así los ms hayan cumplido hasta que no termine el for no lanzara el alert
    i++
}