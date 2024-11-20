const persona ={
    nombre: "Daniel",
    edad: 18
}

const manejador = { //controla el get y el set del proxy
    get(objetivo,propiedad){ //get pide 
        console.log(`obteniendo la propiedad ${propiedad}`);
        return objetivo[propiedad]
    },
    set(objetivo, propiedad, valor){ //resivo

       if(Object.keys(objetivo).indexOf(propiedad) === -1){
        // if( Object.preventExtensions(objetivo)){
            return console.error(`la propiedad ${propiedad} no existe`);
        } //bloquea el objetivo, que es el objeto persona y no deja agregar
        if(propiedad == "nombre" && !/^[a-zA-Z\s]+$/.test(valor) ){ //EXPRESIONES REGULARES \s son espacios
            //es verdadero  
            throw new Error("valor no permitido") // creacion del nuevo error
        }
        if (propiedad == "edad" && !/^[0-9]+$/.test(valor)) {
            throw new Error("valor solo debe contener numeros");
            
        }
        
       objetivo[propiedad] = valor;
    }
}


const proxy = new Proxy(persona, manejador); //un proxy a la constante persona
proxy.nombre = "Daniel Martinez"; // cambia el valor de nombre de Daniel a Daniel Martinez
// proxy.empresa = "SYC";
proxy.edad = "letras"
console.log(proxy.nombre);// imprime
console.log(persona);


