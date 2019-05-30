/* 
Crea un algoritmo que imprima la marca, modelo y precio del teléfono más barato del arreglo stock
*/

const stock = [
	{ marca: "Huawei", modelo: "P30", precio: 13500 },
	{ marca: "Apple", modelo: "iPhone x", precio: 20000 },
	{ marca: "Motorola", modelo: "Moto X", precio: 10000 }
]
let precioMasBajo = stock[0].precio;
let idxPrecioMasBajo = 0;
for(let i = 1; i < stock.length; i++){
    if(precioMasBajo > stock[i].precio){
        precioMasBajo = stock[i].precio;
        idxPrecioMasBajo = i;
    }
}
console.log("El Celular con el precio mas bajo es: ");
console.log("Marca: " + stock[idxPrecioMasBajo].marca);
console.log("Modelo: " + stock[idxPrecioMasBajo].modelo);
console.log("Precio: " + stock[idxPrecioMasBajo].precio);