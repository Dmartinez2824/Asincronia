
let i = 0;

setTimeout(() => alert(i), 100);

for(let j = 0; j < 10000000; j++){ 
    i++
}


// el resultado es 100000000

