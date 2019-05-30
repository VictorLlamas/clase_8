/* 
Joel tiene que dar un reconocimiento al alumno con mejor promedio de su clase, él tiene una lista de alumnos,
cada alumno tiene un nombre y una lista de materias, cada materia tiene su nombre y su calificación. 
Haz un algoritmo que escriba el nombre del alumno que tenga el promedio más alto
*/

let alumnos = [
    {
        nombre: "Victor", 
        materias: [{nombre: "Matematicas", cal: 6},{nombre: "Espanol", cal: 10}]
    },
    {
        nombre: "Jorge", 
        materias: [{nombre: "Matematicas", cal: 6},{nombre: "Espanol", cal: 6}]
    },
    {
        nombre: "Roberto", 
        materias: [{nombre: "Matematicas", cal: 10},{nombre: "Espanol", cal: 10}]
    }
]

let mejorPromedio = 0;
let idxMejorPromedio = 0;

for(let idxAlumno = 0; idxAlumno < alumnos.length; idxAlumno++){
    let sumaMaterias = 0;
    let promedio = 0;    
    for(let idxMat = 0; idxMat < alumnos[idxAlumno].materias.length; idxMat++){
        sumaMaterias += alumnos[idxAlumno].materias[idxMat].cal;
    }
    promedio = sumaMaterias / alumnos[idxAlumno].materias.length;
    if(mejorPromedio < promedio){
        mejorPromedio = promedio;
        idxMejorPromedio = idxAlumno;
    }
}

console.log("El alumno con el promedio mas alto es: " + alumnos[idxMejorPromedio].nombre + " con un promedio de: " + mejorPromedio + "%");