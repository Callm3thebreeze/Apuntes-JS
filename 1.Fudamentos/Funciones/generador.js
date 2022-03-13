

function* nombres(){
    yield 'Juan';
    yield 'Jesús';
    yield 'Raul';
    yield 'Patri';
    yield 'Pepe'

    return 'María';
} 

//Devuelven un objeto con el nombre y un valor false para todos excepto para el último

const iterator = nombres();

/* console.log(iterator.next().value);  //Con value nos devuelve sólo el nombre
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next()); */

/* let valor = iterator.next();
while(valor.done != true){
    console.log(valor.value);
    valor = iterator.next();
}
console.log(valor.value) */

for(const item of iterator){
    console.log(item)
}