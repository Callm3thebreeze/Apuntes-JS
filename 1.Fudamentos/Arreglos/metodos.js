//.shift elimina el primer valor del arreglo (posición 0)

//.unshift agrega un alemento al arreglo por el principio

//.join(" elemento de union") junta elementos de un arreglo

//.split("-") separa elementos, devuelve un arreglo con los elementos separados

//.splice(_,_,"____") añade o remplaza elementos a un array en una posición concreta 
//(posicion,elementos a eliminar (0 = ninguno), Contenido)

//.flat(nºdimensiones) aplana arrays con arrays anidados, si encontramos varias dimensiones en los mismos y queremos que flat nos 
//aplane un array que contiene otros 2 arrays, debemos especificarlo en el paréntesis

//.forEach() ejecuta una funcion indicada cada vez por cada elemento del array.

let calificaciones = [7, 8, 3, 9, 8.5, 6.3, 4.5]

calificaciones. forEach(function(valor, indice){
    console.log(valor, indice);
})

function recorrido(valor, indice){
    console.log(valor, indice);
}

calificaciones.forEach(recorrido);

calificaciones.forEach( (_, indice) =>{
    console.log(indice);
})


//.push = append(Py)

let añadido = calificaciones.push(2.5)

console.log(añadido)
console.log(calificaciones)

//.pop() = Py

calificaciones.pop()
console.log(calificaciones)



//.indexOf para buscar un elemento en un arreglo, si no existe devolverá -1

console.log(calificaciones.indexOf(8.5))


//.map para alterar los elementos de la forma indicada


const respuestaMap = calificaciones.map( (valor,indice) =>{
    return valor * 10;
})

console.log(respuestaMap)

var numbers = [1, 5, 10, 15];
var doubles = numbers.map(function(x) {
   return x * 2;
});
// doubles is now [2, 10, 20, 30]
// numbers is still [1, 5, 10, 15]

var numbers = [1, 4, 9];
var roots = numbers.map(function(num) {
    return Math.sqrt(num);
});
// roots is now [1, 2, 3]
// numbers is still [1, 4, 9]


//.reduce(funcion(acumulador, valor){}, valor inicial acumulador) ejecuta una función reductora sobre cada elemento de un array, 
//devolviendo como resultado un único valor.

const suma = calificaciones.reduce( (acumulador, valor) => acumulador += valor, 0);

console.log(suma)

