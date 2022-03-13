let humano = {
    nombre: 'Jesús',
    edad: 24,
    bilingue: 'meh',
    habilidades: ['guitarra', 'deportes', 'diaeño']
}

console.log(humano);

console.table(humano);


let post = {
    fecha: '06/03/2021',
    titulo: 'como cocinar los mejores pancakes',
    autor: {
        nombre: 'Juanito',
        rol: 'publicador',
        photo: 'img/photo1.jpg'

    },

    comentarios: [
        {
            id: 1,
            txto: 'buen contenido',
            autor:{
                nombre: 'Pepe',
                rol: 'publicador',
                photo: 'img/photo2.jpg'
            }
        },

        {
            id: 2,
            txto: 'no me sabía esos trucazos',
            autor:{
                nombre: 'Sonia',
                rol: 'publicador',
                photo: 'img/photo3.jpg',
                contacto: {
                    email: 'soniaprima@gmail.com'
                }
            }
        }
    ]

};

console.log(post);

//Navegar por el objeto
console.log(post.comentarios[0].autor.nombre);
console.log(post['comentarios'][0]['autor']['nombre']);

//añadir propiedades

post.shares = 100;
post['likes'] = 50;

console.log(post);

//Recorrer un objeto con (for ____ in)

for(prop in post){
    console.log(prop);
}


//devolver clave y valor

for(prop in post){
    const clave = prop;
    const valor = post[clave];
    console.log(clave, valor);
}



