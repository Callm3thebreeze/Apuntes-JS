const boton = document.querySelector('#boton');
const input = document.querySelector('#input');


// let dato = 50;

// boton.addEventListener('click', () => {
//     dato = 100;
//     console.log('Callback dato = ', dato);
// });

// console.log('Dato = ', dato);

function calcularSuma(valores, callback){
    const res = valores.reduce((acc, valor) => acc =+ valor, 0);

    callback();
    console.log('Ya se ha mandado a llamar al callback');
    return res;
}

console.log('2', calcularSuma([1,2,3,4], ()=>{
    console.log('3. Operacion terminada');
}));



function calcularSuma2(valores, callback){
    const res = valores.reduce((acc, valor) => acc =+ valor, 0);

    callback(res, 'WASAA', 77);
    
}

calcularSuma2([1,2,3,4], function(output, mensaje, numero){
    console.log('La suma es', output, mensaje, numero);
});


function calcularSuma3(valores, succesCallback, errorCallback){
    const res = valores.reduce((acc, valor) => {
        if(isNaN(valor)){
            errorCallback(`El valor ${valor} debe ser un numero`);
            return false;
        }else{
            return acc += valor;
        }
    }, 0);

    succesCallback(res);
}

calcularSuma3([1,1,1], function(res){
    console.log('Resultado:', res);
}, function(error){
    throw new Error(error);
});