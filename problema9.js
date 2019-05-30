/* 
Crea un algoritmo que imprima la suma de los bonos del objeto persona
*/

const persona = {
	nombre: "John Doe",
    bonos: [100, 500, 1300]
}

let sumaBonos = 0;
for(let idxBono = 0; idxBono < persona.bonos.length; idxBono++){
    sumaBonos += persona.bonos[idxBono];
}

console.log("La suma de bonos para: " + persona.nombre + " es $" + sumaBonos);
