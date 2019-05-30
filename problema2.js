/*
Crea un algoritmo que imprima la suma de los valores de esta matriz
*/

const arreglo = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    ]
let suma = 0;
for(let idxArreglo = 0; idxArreglo < arreglo.length; idxArreglo++){
    for (let idx = 0; idx < arreglo[idxArreglo].length; idx++){
        suma += arreglo[idxArreglo][idx];
    }
}
console.log("La suma total del arreglo es: "+ suma);