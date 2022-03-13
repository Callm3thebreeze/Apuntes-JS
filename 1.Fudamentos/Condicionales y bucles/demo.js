let edad = 23

if (edad > 18){
    console.log("Adelante.");
}else{
    console.error("Ande vas chiquillo.")
} 


let cerveza = "ipas"

switch(cerveza){
    case "mahou":
        console.log("Buenísma, la clásica mejor y si es de grifo pa qué más.")
    break;

    case "ipas":
        console.log("Entiendo que tengan su público, pero no son lo mío...")
    break;

    case "cruzcampo":
        console.log("Poto.")
    break;

    case "Alhambra":
        console.log("Mu wena, la verde la mejor.")
    break;

    default:
        console.log("Mi opinión? Sobre cual?")

}


//Operador Ternario

let likes = 1;

if(likes === 1){
    console.log(likes + ' like')
}else{
    console.log(likes + ' likes')
}

(likes === 1)? console.log(likes + ' like') : console.log(likes + ' likes')

console.log((likes === 1)? likes + ' like' : likes + ' likes') 