const promesa = new Promise(function(resolve, reject){
    const numero = 100;

    if(numero === 1000) resolve('El numero es correcto');

    reject('El numero no es correcto');
})


//console.log(promesa);

// promesa.then(resultado => {
//     console.log(resultado)
// }, error => {
//     console.log(error);
// });

promesa
.then(resultado => console.log(resultado))
.catch(error => console.error(error));


//funcion muda, es lo mismo que function(){}
const promesa2 = () => {
    return new Promise((resolve, reject) => {
        let res = 0;
        for(let i = 1; i < 1000000; i++){
            res += i * i;
        }
        if(res <= 0) reject('No se completo la operacion');
        resolve(res);
    });
}

console.log('Inicia promesa 2');

promesa2()
.then(resultado => {
    console.log(resultado);
})
.catch(error => {
    console.error(error);
})

console.log('Fin de promesa 2');