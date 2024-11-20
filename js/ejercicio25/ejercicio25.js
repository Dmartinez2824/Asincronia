const empleado = {
        nombre: "Daniel Martinez",
        telefono: 3022490476,
        correo: "dafer4563@gmail.com"       
}

const manejador = {
    get(objetivo,propiedad){
        console.log(`obteniendo la propiedad ${propiedad}`);
        return objetivo[propiedad];
    },
    set(objetivo, propiedad, valor){
        if(Object.keys(objetivo).indexOf(propiedad) === -1){
            throw new Error("no existe la propiedad"); 
        } 
        try{
        if (propiedad == 'nombre' && !/^[a-zA-Z\s]+$/.test(valor)) {
            throw new Error("solo se permiten letras");
        }
        if(propiedad == "telefono" && !/^[0-9]<=10/){
            throw new Error("solo numeros");
            
        }
        if (propiedad == "correo" && !/[a-zA-Z0-9-.-_]+@[a-zA-Z0-9-.-_]+(\.[a-zA-Z]{3,4}){1,2}/gi) {
            throw new Error(`el correo ${valor} no es permitido`);
        }
        
    }catch(Error){
        console.error(Error.message);
    }
}
}
const proxy = new Proxy(empleado,manejador);
proxy.nombre = 2824002;
proxy.hola = "hola";

console.log(empleado);
console.log("se valido, todo esta correcto");

