//prueba comentar nombres o etablecer goku como var y añadir this.nombre a un console.log()


var nombre = 'Goku'



function uno(){
    let nombre = 'Vegeta'
    console.log(this.nombre);

    function dos(){
        let nombre = 'Trunks'
        console.log(nombre);

        function tres(){
            let nombre = 'Gohan'
            console.log(nombre);
        }

        tres();
    }

    dos();

}

uno();

console.log('/-----------------/');

function one(){
    let nombre = 'Vegeta'
    console.log(nombre);

    return function two(){
        let nombre = 'Trunks'
        console.log(nombre);

        return function three(){
            let nombre = 'Gohan'
            console.log(nombre);
        }
        
    }


}

const primera = one();

const segunda = primera();

const tercera = segunda();