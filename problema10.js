/* 
Crea un algoritmo que imprima la suma de el total de crédito que tiene en tarjetas el objeto persona
*/

const persona = {
	nombre: "John Doe",
    tarjetas: [
    {
	    credito: 19000 
    },
    {
        credito: 50000
    }
    ]
}
let sumaCreditos = 0;
for(let idx = 0; idx < persona.tarjetas.length; idx++){
    sumaCreditos += persona.tarjetas[idx].credito;
}
console.log("La suma de creditos de: " + persona.nombre + " es $" + sumaCreditos);

