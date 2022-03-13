//Formas de llamar al logo

const logo = document.getElementById('logo');

console.log(logo);

const logov2 = document.querySelector('#logo');   //El # es nomenclatura css

console.log(logov2);

//Formas de llamar a los elementos de la lista

const item = document.getElementsByClassName('item');

console.log(item);

const itemv2 = document.querySelectorAll('.item'); 

console.log(itemv2);

//Formas de llamar a los hipervinculos

const links = document.getElementsByTagName('a');

const linksv2 = document.querySelectorAll('a');

console.log(links, linksv2);


//NAVEGACIÓN

const header = document.querySelector('header');

const hijosHeader = header.children; // Nos devuelve sólo los elementos html

console.log(hijosHeader);

const hijosHeaderv2 = header.childNodes;

console.log(hijosHeaderv2); // Nos devuelve todos los nodos, es decir, elementos html, saltos de línea...

console.log('padre', logo.parentElement, logo.parentNode); //En este caso nos sirven ambos


//Elementos hermanos

console.log('hermanos', logo.parentElement.children, logo.nextElementSibling);

