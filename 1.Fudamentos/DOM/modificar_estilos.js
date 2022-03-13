const boton = document.querySelector('#boton');

boton.style.backgroundColor = "blue";     //Color fondo
boton.style.color = '#fff';              //Color texto

boton.style.paddingLeft = "50px";
boton.style.paddingTop = "50px";
boton.style.background = 'linear-gradient(270deg, rgba(45, 90, 83, 1) 0%, rgba(98,193, 178, 1) 100%)'; //fondo con degradado

const boton02 = document.querySelector('#boton02');  //Le añadimos una clase

boton02.classList.add('boton');
boton02.classList.add('boton-estilo01')

boton02.classList.remove('boton');
boton02.classList.toggle('boton-estilo02'); //MUY UTIL, con toggle si existe el estilo se lo quita y si no lo tiene ya, pues se lo pone
//Para Dark aplicar un dark mode por ejemplo

console.log(boton02.classList.contains('boton-estilo01'));