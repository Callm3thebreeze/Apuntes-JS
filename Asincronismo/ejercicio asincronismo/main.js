setInterval(() => {
    document.querySelector('#resultado').textContent = new Date();
}, 1000);

for(let i = 0; i < 100 ; i++){
    console.log('Hola');
}



console.log('Inicio de timer');

setInterval(()=> {
    console.log('Timer activado');
}, 1000);

console.log('Fin del timer');




console.log('Inicio de timer 2');

for(let i = 0; i < 15 ; i++){
    setTimeout(function(){
        console.log('count', i);
    }, 3000);
}

console.log('Fin del timer 2');