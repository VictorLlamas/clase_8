/* 
Joel tiene que mostrar los datos de su alumno más grande de edad, el tiene una lista de alumnos, 
cada alumno tiene un nombre y un número con su edad. Haz un algoritmo que escriba el nombre del 
alumno con mayor edad
*/

let alumnos = [
    {nombre: "Victor", edad: 17},
    {nombre: "Jorge", edad: 25},
    {nombre: "Roberto", edad: 45}
]

let edadInicial = alumnos[0].edad;
let idxMayorDeEdad = 0;
for(let idxAlumno = 0; idxAlumno < alumnos.length; idxAlumno++){
    if(edadInicial < alumnos[idxAlumno].edad){
        edadInicial = alumnos[idxAlumno].edad;
        idxMayorDeEdad = idxAlumno;
    }
}
console.log("Nombre: " + alumnos[idxMayorDeEdad].nombre);
console.log("Edad: " + alumnos[idxMayorDeEdad].edad);
