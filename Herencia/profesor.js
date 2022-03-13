class Profesor extends Persona {

    sueldo;

    constructor(id, nombre, edad, sueldo){
        super(id, nombre, edad);
        this.sueldo = sueldo;
    }

    obtenerSueldo(){
        return `${this.sueldo}`;
    }
}