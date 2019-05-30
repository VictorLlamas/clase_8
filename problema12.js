/* 
Crea un algoritmo que imprima la marca, modelo, precio del teléfono más barato y 
el nombre de la tienda donde se puede comprar usando el arreglo store
*/

const stores = [
    {
        name: "Amazon",
        stock: [
            { marca: "Huawei", modelo: "P30", precio: 11999 },
            { marca: "Apple", modelo: "iPhone x", precio: 18000 },
            { marca: "Motorola", modelo: "Moto X", precio: 9000 }
        ]
    },
    {
        name: "Liverpool",
        stock: [
            { marca: "Huawei", modelo: "P30", precio: 13500 },
            { marca: "Apple", modelo: "iPhone x", precio: 20000 },
            { marca: "Motorola", modelo: "Moto X", precio: 10000 }
        ]
    }
]

let precioMasBajo = stores[0].stock[0].precio;
let idxPrecioMasBajo = 0;
let idxTiendaMasBaja = 0;
for(let idxStore = 0; idxStore < stores.length; idxStore++){
    for(let idxStock = 0; idxStock < stores[idxStore].stock.length; idxStock++){
        if(precioMasBajo > stores[idxStore].stock[idxStock].precio){
            precioMasBajo = stores[idxStore].stock[idxStock].precio;
            idxPrecioMasBajo = idxStock;
            idxTiendaMasBaja = idxStore;
        }
    }
}
console.log("La tienda con el celular mas bajo es: ");
console.log("Tienda: " + stores[idxTiendaMasBaja].name);
console.log("Marca: " + stores[idxTiendaMasBaja].stock[idxPrecioMasBajo].marca);
console.log("Modelo: " + stores[idxTiendaMasBaja].stock[idxPrecioMasBajo].modelo);
console.log("Precio: " + stores[idxTiendaMasBaja].stock[idxPrecioMasBajo].precio);
