/* 
Crea un algoritmo que imprima la calificación más alta del objeto alumno
*/

const alumno = {
	nombre: "John Doe",
    calificaciones: [7, 10, 9, 6]
}

let higherCal = 0;
for(let idxCal = 0; idxCal < alumno.calificaciones.length; idxCal++){
    if(higherCal < alumno.calificaciones[idxCal]){
        higherCal = alumno.calificaciones[idxCal];
    }
}
console.log("La calificacion mas alta de: " + alumno.nombre + " es " + higherCal);
