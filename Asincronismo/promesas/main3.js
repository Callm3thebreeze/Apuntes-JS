 const operacion = new Promise( (resolve, reject) => {
     setTimeout(resolve, 3000, 'en curso');
    });
  
//Así podemos ver cómo la operación se completa después de ejecutar el fichero debido al timeout

    // console.log('Comienza operacion');
    // operacion.then(res => console.log(res));
    // console.log('Finaliza operacion');

//Y así hacemos que espere a que se complete el timeOut para seguir con la ejecución del código

async function resolver(){
    console.log('Inicia operacion');

    const res = await operacion;
    console.log(res);
    console.log('Finaliza operacion');
    return res;
}

async function dos(){
    console.log('Regreso', await resolver());
}

dos();