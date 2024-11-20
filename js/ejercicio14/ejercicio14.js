// Define una función asincrónica que espere 1 segundo y luego devuelva una cadena que 
// diga "Operación completada". Utiliza async/await. 

async function operacionAsincronica() { //async para funciones asincronas
    await new Promise(resolve => setTimeout(resolve, 3000)); // Espera 3 segundo // await suspende la ejecución hasta que se cumpla el setTimeout
    return "Operación completada";
  }
  
  operacionAsincronica().then(resultado => console.log(resultado)); //.then se utiliza para el resolve