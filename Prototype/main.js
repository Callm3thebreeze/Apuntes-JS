function Alumno(id, nombre){
    this.id = id;
    this.nombre = nombre;

    this.saludar = function(){
        console.log(`${this.id}: ${this.nombre}`);
    }
}

const alumno = new Alumno('A01', 'Rodrigo');
alumno.saludar();

//Añadimos otra funcion al prototye de Alumno
Alumno.prototype.calificaciones = [9,9,7,3,4];
Alumno.prototype.mostrarCalificaciones = function(){
    console.log(this.calificaciones.join(','));
}

console.log(alumno);
alumno.mostrarCalificaciones();


//Añadimos un método para cualquier objeto de tipo String que vayamos a utilizar
//Este método le da la vuelta a la palabra

String.prototype.reversa = function(){
    return this.split('').reverse().join('');
}

const nombre = 'Jesus';
console.log(nombre.reversa());
console.log('Sergio hacker cabron'.reversa());


//Añadimos funcion promedio al prototipo del Objeto Array

Array.prototype.promedio = function(){
    const count = this.length;
    const total = this.reduce((acc, item) =>{
        if(isNaN(item) || typeof item != 'number') throw new Error(`${item} is not a number`);
        return acc += item;
    }, 0);

    return total / count;
}

console.log([1,2,3,4,5].promedio());

//No es recomendable emplear esta práctica