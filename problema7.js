/* 
Crea un algoritmo que imprima la temperatura más alta
*/

const temperaturas = [
    19, 24, 25, 30, 10
    ]

let higherTemp = 0;
for(let idx = 0; idx < temperaturas.length; idx++){
    if (higherTemp< temperaturas[idx]){
        higherTemp = temperaturas[idx];
    }
}
console.log("La temperatura mas alta es: " + higherTemp);