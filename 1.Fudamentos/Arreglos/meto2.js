
notas = [10, 7, 4, 6, 2]

//.filter() nos devuelve un array con los elementos que cumplan las características requeridas 

const filtrado = notas.filter(nota =>{
    return nota < 5;
})

console.log(filtrado)

//.find() muestra el PRIMER elemento que cumpla las características introduccidas

const encontrado = notas.find(nota => {
    return nota < 5;
})

console.log(encontrado)

//.some()

const even = (element) => element % 2 === 0;

const algun = notas.some(even);

console.log(algun)

const algun2 = notas.some(nota => {
    return nota === 3;
});

console.log(algun2)

//.sort() ordena según Unicode, para orenar un array numérico debemos utilizar:

const ordenar = notas.sort((a,b) => a - b);

console.log(ordenar)
