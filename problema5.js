/* 
Crea un algoritmo que imprima la cantidad de partidas ganadas por el objeto jugador
 */

const jugador = {
	nombre: "John Doe",
	partidas: [true, false, true, true]
}
let totalPartidas = jugador.partidas.length;
let partidasGanadas = 0;
for(let idx=0; idx < totalPartidas; idx++){
    if(jugador.partidas[idx]){
        partidasGanadas ++;
    }
}
console.log("La cantidad de partidas ganadas del jugador: " + jugador.nombre + " es " + partidasGanadas );