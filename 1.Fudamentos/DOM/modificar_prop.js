const foto = document.querySelector('#foto');

console.log(foto.width, foto.getAttribute('width'));


console.table([
    {
        prop: foto.width,
        tipo: typeof foto.width
    },
    {
        prop: foto.getAttribute('width'),
        tipo: typeof foto.getAttribute('width')
    }
]);   //Como podemos comprobar, nos proporcionan el valor de forma distinta

//Cambiar el valor

foto.width = 300;
foto.setAttribute('width', '40%');

const boton = document.querySelector('#boton');
console.log(boton.textContent);

boton.textContent = 'Hola a todos';