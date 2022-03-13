class Alumno{

    #matricula;
    #nombre;
    #edad;

    constructor(matricula, nombre, edad){

        this.#matricula = matricula;
        this.#nombre = nombre;
        this.#edad = edad;
    }

    saludar(){
        return `Hola! Mi nombre es ${this.#nombre} y tengo ${this. #edad} años.`;
    }

    get matricula(){
        return this.#matricula
    }

    get nombre(){
        return this.#nombre
    }

    get edad(){
        return this.#edad
    }

    set matricula(valor){
        this.#matricula = valor;
    }

    set nombre(valor){
        this.#nombre = valor;
    }

    set edad(valor){
        this.#edad = valor;
    }
}

let alumno = new Alumno('A01', 'Juan', 21);

console.log(alumno.saludar());
