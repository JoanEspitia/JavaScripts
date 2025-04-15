// Arreglo de frutas
const frutas = ['manzana', 'plátano', 'manzana', 'naranja',
                'plátano', 'manzana', 'pera', 'naranja', 'pera'];


const contadorFrutas = {};


for (let i = 0; i < frutas.length; i++) {
    const fruta = frutas[i];
    if (contadorFrutas[fruta]) {
        contadorFrutas[fruta]++;
    } else {
        contadorFrutas[fruta] = 1;
    }
}


console.log("Cantidad de cada tipo de fruta:");
for (const fruta in contadorFrutas) {
    console.log(`${fruta}: ${contadorFrutas[fruta]}`);
}



// uso de while
let i = 0;
const contadorFrutasWhile = {};

while (i < frutas.length) {
    const fruta = frutas[i];
    if (contadorFrutasWhile[fruta]) {
        contadorFrutasWhile[fruta]++;
    } else {
        contadorFrutasWhile[fruta] = 1;
    }
    i++;
}

console.log("Cantidad de cada tipo de fruta (usando while):");
for (const fruta in contadorFrutasWhile) {
    console.log(`${fruta}: ${contadorFrutasWhile[fruta]}`);
}
