 const usuario = {
     id: 5,
     nombre: 'Sarah',
     edad: 38,
     saludo: function(){
         return 'Hola, bienvenido al curso';
     }
 };

 console.log(usuario.saludo());

 const viaje = {
     tiempo: function(distancia, velocidad){
         return distancia / velocidad;
     }

 };

 console.log(viaje.tiempo(240,120));


 //.this  Hace referencia al objeto que lo contiend pero el valor depende de cómo se use (+ claro agua, hay que joderse)
 //NO EXISTE bajo el concepto de las FUNCIONES DE FLECHA B 

 let nombre = 'John';
 let edad = 10;

 console.log(nombre, edad);


//Al escribise fuera de una función, this, hace referencia al objeto global Window

 this.nombre = 'Jessica';
 this.edad = 40;

 console.log(this.nombre, this.edad);

 const personajiyo = {
    id: 5,
    nombre: 'Sarah',
    edad: 38,
    saludo: function(){
        return `Hola, ${this.nombre}`;
    },

    getEdad: () =>{
        return this.edad;
    }/*,

    getEdad: function(){
        return this.edad;
    }*/
 };


console.log(personajiyo);
console.log(personajiyo.saludo());
console.log(personajiyo.getEdad());   //Como vemos this no funciona en funciones flecha



// call(), apply(), blind()


