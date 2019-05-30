/*
Crea un algoritmo que imprima la suma de los valores de este arreglo
const arreglo = [2, 3, 4, 5]
*/

const arreglo = [2, 3, 4, 5];
let suma = 0;
for (let idx = 0; idx < arreglo.length; idx++){
    suma += arreglo[idx];
}
console.log("La suma de los datos del arreglos es: " + suma);