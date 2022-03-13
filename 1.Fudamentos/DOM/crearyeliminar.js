
//Creamos und contenedor con formato

const body = document.querySelector('body');

const container = document.createElement('div');

container.id = 'mainContainer';
container.style.backgroundColor = '#003366';
container.style.color = 'white';
container.style['padding'] = '50px';
container.textContent = 'Binvenidos al curso';

body.appendChild(container);

//Creamos texto

const texto = document.createTextNode(' de Javascript')
container.appendChild(texto);

//Creamos un link

const link = document.createElement('a');
link.textContent = 'Ir a Google';
link.href = 'https://www.google.com';

//Un botón

const boton = document.createElement('button');
boton.textContent = 'Clickea ;)'

container.append(link, boton, 'Mejillones');  //append nos permite añadir varios elementos al mismo tiempo
//Para que los elementos aparecieran al principio podemos usar .prepend() en lugar de append

//ELIMINANDO

boton.remove(); 

//La referencia sigue ahí, por lo que podríamos volver a añadirlo con solo introducir:
//container.append(boton);

container.removeChild(link); //Podemos eliminar cualquier elemento menos el texto 'Mejillones', pues no tenermoa con qué referenciarlo
container.removeChild(texto);


//.innerHTML

const html = `
    <div>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </div>
`;

container.innerHTML = html;





