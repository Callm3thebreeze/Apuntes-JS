

function area(figura = 'cuadrado', base = 0, altura = 0){
    //let resultado = 0;
    switch (figura) {
        case 'cuadrado':
            //resultado = base * base;
            return base * base;
            break;

        case 'rectangulo':
            //resultado = base * altura;
            return base * altura;
            break;
        
        case 'triangulo':
            //resultado = (base* altura)/ 2;
            return (base * altura)/ 2;
            break;
    
        default:
            throw new Error('Figura no encontrada');
            break;
    }
//return resultado;
}

const res = area('triangulo', 10, 20)

console.log(res);


function suma_multiple(...numeros){  // A este tipo de parámetros no puedes añadirle un valor por defecto
    let res = 0;
    for(let i=0; i<numeros.length; i++){
        res += numeros[i];
    }
    console.log(res);
}

suma_multiple(2,3,5,4);