
//MUY ÚTIL!!!
//stringify() convirte un objeto de JS en una cadena JSON


// const contenedor = document.querySelector('#resultado');

// fetch('http://localhost:3000/api')
// .then(respuestaHTTP => {
//     console.log(respuestaHTTP);
//     return respuestaHTTP.json();
// })
// .then(texto => {
//     console.log(texto.datos[0]);
//     contenedor.innerHTML = texto.datos[0].title;
// });


// fetch('http://localhost:3000', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({'curso': 'Javascript'})
// })
// .then(respuestaHTTP => respuestaHTTP.json())
// .then(json =>{
//     console.log(json);
// })
// .catch(error => {
//     console.error(error);
// });


//FETCH CON ASYN Y AWAIT

//1. DENTRO DE UNA FUNCION 

// async function get(){
//     const resultadoHttp = await fetch('http://localhost:3000/api')
//     const data = await resultadoHttp.json();

//     console.log('Mensaje =', data.mensaje);
// }

// get();


//2. CON UNA FNCION AUTOEJECUTABLE (FUNCION MAGICA)

( async () => {
    const resultadoHttp = await fetch('http://localhost:3000/api')
    const data = await resultadoHttp.json();

    console.log('Mensaje =', data.mensaje);

})();

//3. CON FUNCION MAGICA Y TRY CATCH

( async () => {
    try{
        const resultadoHttp = await fetch('http://localhost:3000/api')
        const data = await resultadoHttp.json();
    
        console.log('Mensaje =', data.mensaje);
    }catch(error){
        console.error(error);
    }  

})();