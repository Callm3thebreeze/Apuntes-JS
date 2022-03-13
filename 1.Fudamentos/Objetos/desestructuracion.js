const usuario = {
    id: 5,
    nombre: 'Ramiro',
    edad: 38,
    habilidades: [
        {
            id: 0,
            nombreHabilidad: 'programacion'
        },
        {
            id: 1,
            nombreHabilidad: 'canto',
        }

    ]
};

/*const id = usuario.id;
const nombre = usuario.nombre;
const habilidad01 = usuario.habilidades[0].nombreHabilidad:*/

const {id, nombre, habilidades } = usuario;
console.log(id, nombre, habilidades);


const [habilidad01, habilidad02] = habilidades;    //Desesctructurar sirve básicamente para poder llamar a propiedades internas del onjeto ahorrando código

console.log(habilidad01, habilidad02)



const personajes = [
    { id: 0, nombre: 'kk'},
    { id: 1, nombre: 'canelita'},
    { id: 2, nombre: 'nook'}
];

const [ kk, canelita, nook] = personajes;

console.log(canelita, nook, kk);


