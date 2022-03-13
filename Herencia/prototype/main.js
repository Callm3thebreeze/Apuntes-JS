function Alumno(id, nombre){
    this.id = id;
    this.nombre = nombre;

    this.saludar = function(){
        console.log(`${this.id}: ${this.nombre}`);
    }
}

const alumno = new Alumno('A01', 'Jesus');
alumno.saludar();

Alumno.prototype.calificaciones = [9,9,8,10];
Alumno.prototype.mostrarCalificaciones = function(){
    console.log(this.calificaciones.join(','));
}

alumno.mostrarCalificaciones();