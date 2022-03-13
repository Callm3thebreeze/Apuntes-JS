
//Tradicional

//function gradosCaK(valor){
//    return valor + 274.15;
//}


//Flecha

const gradosCaK = valor => valor + 274.15;    //Si en lugar de 'valor' tuvieramos 2 parámetros, si que los pondríamos entre parétesis

console.log(gradosCaK(15));

//Función anónima

(function(){

    console.log("Función anónima");
})();

//Las funciones anónimas están encapsuladas

//Función anónima por flecha

(()=>{

    console.log("Funcion anónima con flecha")
})();