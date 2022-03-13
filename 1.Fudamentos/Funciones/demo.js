

function suma(num1 = 0, num2 = 0) {      // Los '= 0' serían los valores por defecto de no introducir argumentos
    let res = num1 + num2;
    return res;
}

function imprimir(msg){
    console.log(msg);
}

res = suma(2,5);

imprimir(res);


function multiplicar(num1, num2){
    if(isNaN(num1) || isNaN(num2)){
        throw new Error('Los parámetros deben ser números.');  //Esto escupe un mensaje de error e impide que se siga ejcutando el programa
    }
    const respuesta = num1 * num2;

    console.log(`Respuesta: ${respuesta}`);
}

multiplicar('4',5);
