/* 
Joel tiene que pagar impuestos, él tiene una lista de ingresos y gastos, cada ingreso está representado 
en número y significan pesos, cada gasto tiene un concepto (texto) y el total del gasto en pesos. 
Los impuestos que debe pagar son el 16% de sus ingresos menos el total de sus gastos que estén bajo el 
concepto de: “salud”
*/

let ingresos = [1000, 4500, 800];
let gastos = [
                {concepto: "fiesta", total: 2500},
                {concepto: "comida", total: 500},
                {concepto: "salud", total: 100},
                {concepto: "salud", total: 200}
            ];
let totalIngresos = 0;
let totalSalud = 0;
let tax = 0;

for(let idxIngreso = 0; idxIngreso < ingresos.length; idxIngreso++){
    totalIngresos += ingresos[idxIngreso];
}
for(idxGasto = 0; idxGasto < gastos.length; idxGasto++){
    if(gastos[idxGasto].concepto === "salud"){
        totalSalud += gastos[idxGasto].total;
    }
}

tax = (totalIngresos - totalSalud) * (16/100);

console.log("El total de impuestos que joel tiene que pagar es: " + tax);
