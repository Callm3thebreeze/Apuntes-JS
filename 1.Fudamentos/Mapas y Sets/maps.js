//MAPAS: son como arreglos cuyo índice no tiene por qué indicar su posición, puede ser cualquier cosa

const mapa = new Map();

mapa.set('charmader', 5);

console.log(mapa)   //Map(1) {"charmader" => 5}

mapa.set('charmeleon', 16);
mapa.set('charizard', 36);

console.log(mapa)  //{"charmader" => 5, "charmeleon" => 16, "charizard" => 36}

const nivel = mapa.get('charmeleon');

console.log(nivel) // 16


for(let item of mapa){
    console.log(item)
}

//SETS: con como arreglos cuyo indice y valor son idénticos, esto impide que se repitan elementos con el mismo valor.

const propiedades = new Set();

propiedades.add('color;')
propiedades.add('forma');

console.log(propiedades)